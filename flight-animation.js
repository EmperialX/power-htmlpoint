document.addEventListener('DOMContentLoaded', function() {
    // Create animation container
    const animationContainer = document.createElement('div');
    animationContainer.className = 'flight-animation-container';
    document.body.appendChild(animationContainer);
    
    // Create flight icon
    const flightIcon = document.createElement('div');
    flightIcon.className = 'flight-icon';
    flightIcon.innerHTML = '<i class="fas fa-paper-plane"></i>';
    animationContainer.appendChild(flightIcon);
    
    // Create trail
    const trail = document.createElement('div');
    trail.className = 'flight-trail';
    animationContainer.appendChild(trail);
    
    // Create sonic boom effect at ~45% of animation
    setTimeout(() => {
        createSonicBoom(flightIcon);
    }, 2250);
    
    // Add sparkle and micro-sparkle effects
    let sparkleInterval;
    let microSparkleInterval;
    
    setTimeout(() => {
        sparkleInterval = setInterval(createSparkle, 50);
        microSparkleInterval = setInterval(createMicroSparkles, 30);
    }, 200);
    
    setTimeout(() => {
        clearInterval(sparkleInterval);
        clearInterval(microSparkleInterval);
    }, 4500);
    
    function createSparkle() {
        // Get current position of flight icon
        const iconRect = flightIcon.getBoundingClientRect();
        const x = iconRect.x + iconRect.width / 2;
        const y = iconRect.y + iconRect.height / 2;
        
        // Skip if icon is not visible yet
        if (x <= 0) return;
        
        // Create sparkle
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        
        // Random position around the icon
        const offsetX = Math.random() * 30 - 15;
        const offsetY = Math.random() * 30 - 15;
        
        sparkle.style.left = (x + offsetX) + 'px';
        sparkle.style.top = (y + offsetY) + 'px';
        
        // Randomize sparkle size for more dynamic effect
        const size = 3 + Math.random() * 5;
        sparkle.style.width = size + 'px';
        sparkle.style.height = size + 'px';
        
        animationContainer.appendChild(sparkle);
        
        // Remove sparkle after animation completes
        setTimeout(() => {
            if (sparkle.parentNode) {
                sparkle.parentNode.removeChild(sparkle);
            }
        }, 1500);
    }
    
    function createMicroSparkles() {
        const iconRect = flightIcon.getBoundingClientRect();
        if (iconRect.x <= 0) return;
        
        const x = iconRect.x + iconRect.width / 2;
        const y = iconRect.y + iconRect.height / 2;
        
        // Create a burst of micro sparkles
        for (let i = 0; i < 3; i++) {
            const microSparkle = document.createElement('div');
            microSparkle.className = 'micro-sparkle';
            
            // Random direction values
            const tx = (Math.random() - 0.5) * 100;
            const ty = (Math.random() - 0.5) * 100;
            
            microSparkle.style.setProperty('--tx', tx + 'px');
            microSparkle.style.setProperty('--ty', ty + 'px');
            microSparkle.style.left = x + 'px';
            microSparkle.style.top = y + 'px';
            
            animationContainer.appendChild(microSparkle);
            
            setTimeout(() => {
                if (microSparkle.parentNode) {
                    microSparkle.parentNode.removeChild(microSparkle);
                }
            }, 800);
        }
    }
    
    function createSonicBoom(flightIcon) {
        const iconRect = flightIcon.getBoundingClientRect();
        const x = iconRect.x + iconRect.width / 2;
        const y = iconRect.y + iconRect.height / 2;
        
        const sonicBoom = document.createElement('div');
        sonicBoom.className = 'sonic-boom';
        sonicBoom.style.left = (x - 150) + 'px'; // Center the effect
        sonicBoom.style.top = (y - 150) + 'px'; // Center the effect
        
        animationContainer.appendChild(sonicBoom);
        
        // Create extra sparkles for the sonic boom
        for (let i = 0; i < 20; i++) {
            setTimeout(() => {
                const sparkle = document.createElement('div');
                sparkle.className = 'sparkle';
                
                // Random position around the sonic boom center
                const angle = Math.random() * Math.PI * 2;
                const distance = Math.random() * 100 + 50;
                const sparkleX = x + Math.cos(angle) * distance;
                const sparkleY = y + Math.sin(angle) * distance;
                
                sparkle.style.left = sparkleX + 'px';
                sparkle.style.top = sparkleY + 'px';
                
                const size = 3 + Math.random() * 6;
                sparkle.style.width = size + 'px';
                sparkle.style.height = size + 'px';
                
                animationContainer.appendChild(sparkle);
                
                setTimeout(() => {
                    if (sparkle.parentNode) {
                        sparkle.parentNode.removeChild(sparkle);
                    }
                }, 1500);
            }, Math.random() * 200);
        }
        
        // Remove sonic boom after animation completes
        setTimeout(() => {
            if (sonicBoom.parentNode) {
                sonicBoom.parentNode.removeChild(sonicBoom);
            }
        }, 800);
    }
    
    // Sound effect for takeoff (with fast whoosh)
    setTimeout(() => {
        playWhooshSound();
    }, 100);
    
    function playWhooshSound() {
        try {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            
            // Create oscillator for "whoosh" sound
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            
            oscillator.type = 'sine';
            oscillator.frequency.setValueAtTime(600, audioContext.currentTime);
            oscillator.frequency.exponentialRampToValueAtTime(100, audioContext.currentTime + 1);
            
            gainNode.gain.setValueAtTime(0, audioContext.currentTime);
            gainNode.gain.linearRampToValueAtTime(0.1, audioContext.currentTime + 0.1);
            gainNode.gain.linearRampToValueAtTime(0, audioContext.currentTime + 1);
            
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            oscillator.start();
            oscillator.stop(audioContext.currentTime + 1);
            
            // Add second "boom" sound for sonic boom
            setTimeout(() => {
                const boomOscillator = audioContext.createOscillator();
                const boomGain = audioContext.createGain();
                
                boomOscillator.type = 'sawtooth';
                boomOscillator.frequency.setValueAtTime(150, audioContext.currentTime);
                boomOscillator.frequency.exponentialRampToValueAtTime(40, audioContext.currentTime + 0.5);
                
                boomGain.gain.setValueAtTime(0, audioContext.currentTime);
                boomGain.gain.linearRampToValueAtTime(0.2, audioContext.currentTime + 0.05);
                boomGain.gain.linearRampToValueAtTime(0, audioContext.currentTime + 0.5);
                
                boomOscillator.connect(boomGain);
                boomGain.connect(audioContext.destination);
                
                boomOscillator.start();
                boomOscillator.stop(audioContext.currentTime + 0.5);
            }, 2250);
            
        } catch (e) {
            console.log("Browser doesn't support Web Audio API");
        }
    }
    
    // Remove animation container after it completes
    setTimeout(() => {
        if (animationContainer.parentNode) {
            animationContainer.parentNode.removeChild(animationContainer);
        }
    }, 6000);
});
