document.addEventListener('DOMContentLoaded', function() {
    // Create dark background overlay
    const backgroundOverlay = document.createElement('div');
    backgroundOverlay.className = 'animation-background';
    document.body.appendChild(backgroundOverlay);

    // Create animation container
    const animationContainer = document.createElement('div');
    animationContainer.className = 'wave-animation-container';
    document.body.appendChild(animationContainer);
    
    // Create power grid nodes (connection points for the waves)
    const nodePositions = [
        { x: '5%', y: '20%' },
        { x: '10%', y: '35%' },
        { x: '8%', y: '50%' },
        { x: '12%', y: '65%' },
        { x: '6%', y: '80%' },
        { x: '95%', y: '20%' },
        { x: '92%', y: '35%' },
        { x: '93%', y: '50%' },
        { x: '90%', y: '65%' },
        { x: '94%', y: '80%' }
    ];
    
    // Add power nodes
    nodePositions.forEach(pos => {
        const node = document.createElement('div');
        node.className = 'power-node';
        node.style.left = pos.x;
        node.style.top = pos.y;
        animationContainer.appendChild(node);
        
        // Add subtle delay for each node
        setTimeout(() => {
            // Create power surge effect at node positions
            createPowerSurge(pos.x, pos.y);
        }, Math.random() * 500 + 300);
    });

    // Create multiple electric wave paths
    for (let i = 1; i <= 5; i++) {
        createWavePath(i);
    }
    
    // Add energy particle effects along the wave paths
    let particleInterval = setInterval(createEnergyParticles, 50);
    
    // Create electric arcs between nodes
    setTimeout(() => {
        createElectricArcs();
    }, 1000);
    
    // Create lightning bolts occasionally
    let lightningInterval = setInterval(createLightningBolt, 300);
    
    // Stop creating particles after animation completes
    setTimeout(() => {
        clearInterval(particleInterval);
        clearInterval(lightningInterval);
    }, 4000);
    
    function createWavePath(index) {
        const wavePath = document.createElement('div');
        wavePath.className = `wave-path wave-path-${index}`;
        
        // Create SVG for the electric wave
        const svgNS = "http://www.w3.org/2000/svg";
        const svg = document.createElementNS(svgNS, "svg");
        svg.setAttribute("viewBox", "0 0 1200 100");
        
        const path = document.createElementNS(svgNS, "path");
        
        // Create complex electric wave patterns
        let pathData = "M0,50 ";
        const segments = 40; // More segments for more complex waves
        const segmentWidth = 1200 / segments;
        
        // Generate different types of electric patterns
        switch(index) {
            case 1: // Sharp zigzag
                for (let i = 1; i <= segments; i++) {
                    const x = i * segmentWidth;
                    const y = 50 + (Math.random() > 0.5 ? -40 : 40);
                    pathData += `L${x},${y} `;
                }
                break;
                
            case 2: // Sine wave with varying amplitude
                for (let i = 1; i <= segments; i++) {
                    const x = i * segmentWidth;
                    const amplitude = Math.random() * 30 + 10;
                    const y = 50 + Math.sin(i * 0.3) * amplitude;
                    pathData += `L${x},${y} `;
                }
                break;
                
            case 3: // Square wave
                let squareUp = true;
                for (let i = 1; i <= segments; i++) {
                    const x1 = i * segmentWidth - segmentWidth/2;
                    const x2 = i * segmentWidth;
                    const y = squareUp ? 30 : 70;
                    
                    pathData += `L${x1},${squareUp ? 50 : y} L${x1},${y} L${x2},${y} `;
                    squareUp = !squareUp;
                }
                break;
                
            case 4: // Complex oscillation
                for (let i = 1; i <= segments; i++) {
                    const x = i * segmentWidth;
                    const y = 50 + Math.sin(i * 0.3) * 20 + Math.cos(i * 0.7) * 15;
                    pathData += `L${x},${y} `;
                }
                break;
                
            case 5: // High frequency noise
                for (let i = 1; i <= segments*2; i++) {
                    const x = i * (segmentWidth/2);
                    const y = 50 + (Math.random() * 30 - 15);
                    pathData += `L${x},${y} `;
                }
                break;
        }
        
        path.setAttribute("d", pathData);
        path.setAttribute("fill", "none");
        path.setAttribute("stroke", `var(--ics-accent)`);
        path.setAttribute("stroke-width", "2");
        path.setAttribute("stroke-linecap", "round");
        path.setAttribute("stroke-linejoin", "round");
        
        // Add electric glow effect
        const filter = document.createElementNS(svgNS, "filter");
        filter.setAttribute("id", `glow-${index}`);
        
        const feGaussianBlur = document.createElementNS(svgNS, "feGaussianBlur");
        feGaussianBlur.setAttribute("stdDeviation", "3");
        feGaussianBlur.setAttribute("result", "blur");
        
        const feComposite = document.createElementNS(svgNS, "feComposite");
        feComposite.setAttribute("in", "SourceGraphic");
        feComposite.setAttribute("in2", "blur");
        feComposite.setAttribute("operator", "arithmetic");
        feComposite.setAttribute("k1", "0");
        feComposite.setAttribute("k2", "1");
        feComposite.setAttribute("k3", "1");
        feComposite.setAttribute("k4", "0");
        
        filter.appendChild(feGaussianBlur);
        filter.appendChild(feComposite);
        
        const defs = document.createElementNS(svgNS, "defs");
        defs.appendChild(filter);
        
        svg.appendChild(defs);
        svg.appendChild(path);
        
        path.setAttribute("filter", `url(#glow-${index})`);
        
        // Add dashoffset animation for electric effect
        const dashLength = index === 3 ? "20, 10" : 
                          index === 5 ? "5, 3" : 
                          "10, 15";
                          
        path.setAttribute("stroke-dasharray", dashLength);
        
        const animate = document.createElementNS(svgNS, "animate");
        animate.setAttribute("attributeName", "stroke-dashoffset");
        animate.setAttribute("from", index % 2 === 0 ? "0" : "1000");
        animate.setAttribute("to", index % 2 === 0 ? "1000" : "0");
        animate.setAttribute("dur", "4s");
        animate.setAttribute("repeatCount", "1");
        
        path.appendChild(animate);
        wavePath.appendChild(svg);
        animationContainer.appendChild(wavePath);
        
        // Create sound for electric wave
        setTimeout(() => {
            playElectricSound(index);
        }, 200 * index);
    }
    
    function createEnergyParticles() {
        // Get all active wave paths
        const wavePaths = document.querySelectorAll('.wave-path');
        
        wavePaths.forEach(wavePath => {
            const rect = wavePath.getBoundingClientRect();
            
            // Only create particles if wave path is visible
            if (rect.width === 0) return;
            
            // Create particles along the wave path
            const particleCount = Math.floor(Math.random() * 2) + 1;
            
            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.className = 'energy-particle';
                
                // Position particle somewhere along the wave path
                const xPos = Math.random() * rect.width;
                const yPos = Math.random() * (rect.height - 40) + 20;
                
                particle.style.left = (rect.left + xPos) + 'px';
                particle.style.top = (rect.top + yPos) + 'px';
                
                // Randomize particle size
                const size = 3 + Math.random() * 6;
                particle.style.width = size + 'px';
                particle.style.height = size + 'px';
                
                // Random color variation
                const colors = ['#00b4d8', '#4361ee', '#7209b7', '#f72585'];
                const randomColor = colors[Math.floor(Math.random() * colors.length)];
                particle.style.backgroundColor = randomColor;
                
                animationContainer.appendChild(particle);
                
                // Remove particle after animation completes
                setTimeout(() => {
                    if (particle.parentNode) {
                        particle.parentNode.removeChild(particle);
                    }
                }, 1500);
            }
        });
    }
    
    function createPowerSurge(x, y) {
        const surge = document.createElement('div');
        surge.className = 'power-surge';
        
        // Convert percentage to pixels
        const xPixel = (parseFloat(x) / 100) * window.innerWidth;
        const yPixel = (parseFloat(y) / 100) * window.innerHeight;
        
        surge.style.left = (xPixel - 100) + 'px';
        surge.style.top = (yPixel - 100) + 'px';
        
        animationContainer.appendChild(surge);
        
        // Remove surge after animation completes
        setTimeout(() => {
            if (surge.parentNode) {
                surge.parentNode.removeChild(surge);
            }
        }, 1200);
    }
    
    function createElectricArcs() {
        // Find all nodes to create arcs between nearby nodes
        const nodes = document.querySelectorAll('.power-node');
        
        // Create arcs between nodes on the same y-level (row)
        const nodesByRow = {};
        
        nodes.forEach(node => {
            const top = node.style.top;
            if (!nodesByRow[top]) {
                nodesByRow[top] = [];
            }
            nodesByRow[top].push(node);
        });
        
        // For each row of nodes, create electric arcs
        Object.values(nodesByRow).forEach(rowNodes => {
            if (rowNodes.length >= 2) {
                // Sort nodes by x position
                rowNodes.sort((a, b) => {
                    return parseFloat(a.style.left) - parseFloat(b.style.left);
                });
                
                // Create an arc between first and last node
                const firstNode = rowNodes[0];
                const lastNode = rowNodes[rowNodes.length - 1];
                
                setTimeout(() => {
                    createArc(firstNode, lastNode);
                }, Math.random() * 500 + 500);
            }
        });
    }
    
    function createArc(node1, node2) {
        const rect1 = node1.getBoundingClientRect();
        const rect2 = node2.getBoundingClientRect();
        
        const x1 = rect1.left + rect1.width / 2;
        const y1 = rect1.top + rect1.height / 2;
        const x2 = rect2.left + rect2.width / 2;
        const y2 = rect2.top + rect2.height / 2;
        
        const arc = document.createElement('div');
        arc.className = 'electric-arc';
        
        // Position and rotate the arc
        const length = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
        const angle = Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;
        
        arc.style.width = length + 'px';
        arc.style.left = x1 + 'px';
        arc.style.top = y1 + 'px';
        arc.style.transformOrigin = '0 50%';
        arc.style.transform = `rotate(${angle}deg)`;
        
        animationContainer.appendChild(arc);
        
        // Play electric zap sound
        playElectricZap();
        
        // Remove arc after animation completes
        setTimeout(() => {
            if (arc.parentNode) {
                arc.parentNode.removeChild(arc);
            }
        }, 300);
    }
    
    function createLightningBolt() {
        if (Math.random() > 0.7) { // Only create lightning occasionally
            // Get random positions for lightning
            const startX = Math.random() * window.innerWidth * 0.8 + window.innerWidth * 0.1;
            const startY = 0;
            const endX = startX + (Math.random() * 200 - 100);
            const endY = window.innerHeight * 0.3 + Math.random() * window.innerHeight * 0.3;
            
            // Create SVG for lightning bolt
            const svgNS = "http://www.w3.org/2000/svg";
            const svg = document.createElementNS(svgNS, "svg");
            svg.setAttribute("width", window.innerWidth);
            svg.setAttribute("height", window.innerHeight);
            svg.classList.add('lightning');
            
            const bolt = document.createElementNS(svgNS, "path");
            
            // Generate zigzag lightning path
            let pathData = `M${startX},${startY} `;
            const segments = 6 + Math.floor(Math.random() * 5);
            
            for (let i = 1; i <= segments; i++) {
                const t = i / segments;
                const x = startX + (endX - startX) * t + (Math.random() * 50 - 25);
                const y = startY + (endY - startY) * t;
                pathData += `L${x},${y} `;
            }
            
            bolt.setAttribute("d", pathData);
            bolt.setAttribute("stroke", "var(--ics-accent)");
            bolt.setAttribute("stroke-width", "3");
            bolt.setAttribute("fill", "none");
            bolt.setAttribute("stroke-linecap", "round");
            bolt.setAttribute("stroke-linejoin", "round");
            
            // Add glow filter
            const filter = document.createElementNS(svgNS, "filter");
            filter.setAttribute("id", "lightning-glow");
            
            const feGaussianBlur = document.createElementNS(svgNS, "feGaussianBlur");
            feGaussianBlur.setAttribute("stdDeviation", "2.5");
            feGaussianBlur.setAttribute("result", "blur");
            
            filter.appendChild(feGaussianBlur);
            
            const defs = document.createElementNS(svgNS, "defs");
            defs.appendChild(filter);
            
            svg.appendChild(defs);
            svg.appendChild(bolt);
            
            bolt.setAttribute("filter", "url(#lightning-glow)");
            
            animationContainer.appendChild(svg);
            
            // Play thunder sound
            playThunderSound();
            
            // Remove lightning after animation completes
            setTimeout(() => {
                if (svg.parentNode) {
                    svg.parentNode.removeChild(svg);
                }
            }, 500);
        }
    }
    
    function playElectricSound(index) {
        try {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            
            // Create oscillator for "electric" sound
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            
            // Different sound for each wave
            switch(index) {
                case 1:
                    oscillator.type = 'sawtooth';
                    oscillator.frequency.setValueAtTime(200, audioContext.currentTime);
                    oscillator.frequency.linearRampToValueAtTime(150, audioContext.currentTime + 0.2);
                    break;
                case 2:
                    oscillator.type = 'square';
                    oscillator.frequency.setValueAtTime(300, audioContext.currentTime);
                    oscillator.frequency.linearRampToValueAtTime(200, audioContext.currentTime + 0.3);
                    break;
                case 3:
                    oscillator.type = 'sine';
                    oscillator.frequency.setValueAtTime(400, audioContext.currentTime);
                    oscillator.frequency.exponentialRampToValueAtTime(250, audioContext.currentTime + 0.4);
                    break;
                case 4:
                    oscillator.type = 'triangle';
                    oscillator.frequency.setValueAtTime(250, audioContext.currentTime);
                    oscillator.frequency.linearRampToValueAtTime(180, audioContext.currentTime + 0.3);
                    break;
                case 5:
                    oscillator.type = 'sawtooth';
                    oscillator.frequency.setValueAtTime(350, audioContext.currentTime);
                    oscillator.frequency.linearRampToValueAtTime(220, audioContext.currentTime + 0.25);
                    break;
            }
            
            // Configure gain (volume)
            gainNode.gain.setValueAtTime(0, audioContext.currentTime);
            gainNode.gain.linearRampToValueAtTime(0.06, audioContext.currentTime + 0.1); // Lower volume
            gainNode.gain.linearRampToValueAtTime(0, audioContext.currentTime + 0.4);
            
            // Add some distortion for electric feel
            const distortion = audioContext.createWaveShaper();
            function makeDistortionCurve(amount) {
                const k = amount || 50;
                const n_samples = 44100;
                const curve = new Float32Array(n_samples);
                for (let i = 0; i < n_samples; ++i) {
                    const x = i * 2 / n_samples - 1;
                    curve[i] = (3 + k) * x * 20 * Math.PI / (Math.PI + k * Math.abs(x));
                }
                return curve;
            }
            distortion.curve = makeDistortionCurve(400);
            distortion.oversample = '4x';
            
            // Connect nodes
            oscillator.connect(distortion);
            distortion.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            // Start and stop
            oscillator.start();
            oscillator.stop(audioContext.currentTime + 0.5);
            
        } catch (e) {
            console.log("Browser doesn't support Web Audio API");
        }
    }
    
    function playElectricZap() {
        try {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            
            // Create oscillator for "zap" sound
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            
            oscillator.type = 'sawtooth';
            oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
            oscillator.frequency.exponentialRampToValueAtTime(200, audioContext.currentTime + 0.2);
            
            gainNode.gain.setValueAtTime(0, audioContext.currentTime);
            gainNode.gain.linearRampToValueAtTime(0.1, audioContext.currentTime + 0.01);
            gainNode.gain.linearRampToValueAtTime(0, audioContext.currentTime + 0.2);
            
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            oscillator.start();
            oscillator.stop(audioContext.currentTime + 0.2);
            
        } catch (e) {
            console.log("Browser doesn't support Web Audio API");
        }
    }
    
    function playThunderSound() {
        try {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            
            // Create noise for thunder
            const bufferSize = 2 * audioContext.sampleRate;
            const noiseBuffer = audioContext.createBuffer(1, bufferSize, audioContext.sampleRate);
            const output = noiseBuffer.getChannelData(0);
            
            for (let i = 0; i < bufferSize; i++) {
                output[i] = Math.random() * 2 - 1;
            }
            
            const noise = audioContext.createBufferSource();
            noise.buffer = noiseBuffer;
            
            // Create a bandpass filter for thunder effect
            const bandpass = audioContext.createBiquadFilter();
            bandpass.type = 'bandpass';
            bandpass.frequency.value = 100;
            
            const gainNode = audioContext.createGain();
            gainNode.gain.setValueAtTime(0, audioContext.currentTime);
            gainNode.gain.linearRampToValueAtTime(0.05, audioContext.currentTime + 0.05);
            gainNode.gain.linearRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
            gainNode.gain.linearRampToValueAtTime(0, audioContext.currentTime + 1);
            
            noise.connect(bandpass);
            bandpass.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            noise.start();
            noise.stop(audioContext.currentTime + 1);
            
        } catch (e) {
            console.log("Browser doesn't support Web Audio API");
        }
    }
    
    // Remove animation container after animation completes
    setTimeout(() => {
        // First fade out the background
        backgroundOverlay.classList.add('fade-out');
        
        // Then remove the elements from DOM
        setTimeout(() => {
            if (animationContainer.parentNode) {
                animationContainer.parentNode.removeChild(animationContainer);
            }
            if (backgroundOverlay.parentNode) {
                backgroundOverlay.parentNode.removeChild(backgroundOverlay);
            }
        }, 500); // Wait for fade-out transition to complete
    }, 5500); // Start fading slightly before the animation fully completes
});
