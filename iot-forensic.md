##  Learning Objectives

IoT devices, including wireless sensors, software, smart speakers, and wearables, are increasingly popular but vulnerable to cyberattacks. This module explores IoT security problems, threats, and forensic examination of Android Wear and Amazon Echo devices.

After completing this module, you should be able to:

- Understand IoT and IoT security problems
- Recognize different types of IoT threats
- Understand IoT forensics
- Perform forensics on IoT devices

![The image displays a slide from a presentation on learning objectives, with a clear and concise layout. The title "LEARNING OBJECTIVES(LO)" is prominently displayed in teal text on the right side of the slide, separated from the rest of the content by a thin teal line. On the left side, four bullet points outline the learning objectives, including understanding IoT and IoT security problems, recognizing different types of IoT threats, understanding IoT forensics, and performing forensics on IoT devices. A thin orange bar at the bottom of the slide features blurry black text, while a subtle watermark reading "ir" is visible in the lower-right corner.](https://api-turbo.ai/52a4586e-d864-4bf4-a73a-65567bb2ad95/e14db84a-1282-499f-94fe-898930198510.jpeg)

## Understanding IoT and Security Problems

IoT devices use sensors to transmit and receive data over the Internet and can sync with various devices. Due to the lack of regular security updates, these devices are highly vulnerable to malware attacks, allowing attackers to turn them into **botnets** for launching cyberattacks.

![The image depicts a slide from a presentation focused on IoT and IoT security problems. The slide, titled "IoT#01: Understand IoT and IoT Security Problems," features a list of five key points: "What is IoT?", "IoT Architecture", "IoT Security Problems", "OWASP Top 10 IoT Vulnerabilities", and "IoT Attack Surface Areas." The title and bullet points are presented in black text against a white background, with a thin teal line separating the title from the list. A faint gray watermark and an orange bar at the bottom add visual interest to the slide.](https://api-turbo.ai/52a4586e-d864-4bf4-a73a-65567bb2ad95/70f65ae2-350a-44b3-9c9b-973999702c2c.jpeg)

### What is IoT?

IoT, or **Internet of Everything (IoE)**, refers to web-enabled computing devices that can sense, collect, and send data using embedded sensors, communication hardware, and processors.

> An IoT "thing" is a device implanted on natural, man-made, or machine-made objects with network communication functionality.

IoT uses existing and emerging technologies for sensing, networking, and robotics, enabling deeper analysis, automation, and integration. Key features include connectivity, sensors, AI, small devices, and active engagement.

![The image depicts a presentation slide titled "What is IoT?" and provides a comprehensive overview of the Internet of Things (IoT). The slide features a central graphic illustrating the various domains and devices that comprise the IoT, including industrial, wearable, home, healthcare, and transportation devices. The IoT is defined as a network of devices with IP addresses that can sense, collect, and send data using embedded sensors, communication hardware, and processors. The slide also highlights that an IoT "thing" can be any device implanted on natural or man-made objects that can communicate over a network. Overall, the slide effectively conveys the scope and complexity of the IoT ecosystem.](https://api-turbo.ai/52a4586e-d864-4bf4-a73a-65567bb2ad95/26120237-854f-4761-9ebe-28e557733f76.jpeg)

### IoT Architecture

The IoT architecture comprises several layers, each designed to meet the requirements of various sectors:

![The image presents a detailed diagram of the IoT Architecture, comprising five distinct layers. The layers, listed in ascending order from bottom to top, are: Edge Technology Layer, Access Gateway Layer, Internet Layer, Middleware Layer, and Application Layer. Each layer is accompanied by a brief description of its function, including the types of devices and activities associated with each layer, such as sensors, devices, and machines in the Edge Technology Layer, and device management and information management in the Middleware Layer. A blue line connects the layers, originating from the Edge Technology Layer and flowing upward to the Application Layer, with a cloud icon situated near the Internet Layer. The background features a subtle brick pattern.](https://api-turbo.ai/52a4586e-d864-4bf4-a73a-65567bb2ad95/e0ef7227-af3f-4994-a383-d5e4559cbe49.jpeg)

- **Edge Technology Layer**: Includes hardware like sensors and RFID tags for data collection.
- **Access Gateway Layer**: Bridges the gap between devices and clients, handling message routing and identification.
- **Internet Layer**: Enables communication between devices, clouds, and local gateway services.
- **Middleware Layer**: Acts as an interface between the application and hardware layers, managing data and devices.
- **Application Layer**: Delivers services to users in sectors like building, industry, and healthcare.

###  IoT Security Problems

IoT devices often lack proper authentication, use default credentials, and lack strong encryption or key management systems. This makes them vulnerable. Key areas of vulnerability include:

![The image presents a comprehensive overview of IoT security problems, categorized into five distinct sections. The title "IoT Security Problems" is prominently displayed at the top, accompanied by a logo featuring the letters "HFI" in the upper right corner. Below the title, five rectangular boxes are arranged vertically, each representing a different aspect of IoT security: Application, Network, Mobile, Cloud, and IoT. Each box is color-coded and contains a brief description of the specific security concerns associated with that category. Notably, the IoT box serves as an umbrella category, encompassing all the preceding sections. The background of the image features a subtle watermark, while the bottom section is adorned with an orange bar and small text.](https://api-turbo.ai/52a4586e-d864-4bf4-a73a-65567bb2ad95/776e4656-0d91-4006-9abf-99c5a1a5d3d3.jpeg)

- **Application**: Issues include input validation, authentication, authorization, lack of automatic security updates, and default passwords.
- **Network**: Vulnerabilities include firewall issues, improper encryption, and lack of automatic updates.
- **Mobile**: Insecure APIs, lack of communication channel encryption, and lack of storage security.
- **Cloud**: Improper authentication and lack of encryption for storage and communications.

The equation below encapsulates this relationship:

Application+Network+Mobile+Cloud=IoTApplication+Network+Mobile+Cloud=IoT

### OWASP Top 10 IoT Vulnerabilities

![The image presents a table titled "OWASP Top 10 IoT Vulnerabilities," which outlines the top 10 vulnerabilities in IoT systems. The table is divided into two columns, each listing five vulnerabilities, and includes a brief description of each. The vulnerabilities range from "Weak, Guessable or Hardcoded Passwords" to "Lack of Physical Hardening," and provide insight into common weaknesses in IoT systems. The table appears to be a slide from a presentation on IoT security, likely used for educational or informative purposes. The logo in the top-right corner features the letters "CHFI."](https://api-turbo.ai/52a4586e-d864-4bf4-a73a-65567bb2ad95/a8fd7edc-8a07-4064-9613-12d84019a365.jpeg)

The Open Web Application Security Project (OWASP) identifies the top 10 vulnerabilities in IoT systems:

|Vulnerability|Description|
|---|---|
|Weak or Guessable Passwords|Easy-to-guess passwords or backdoors in firmware grant unauthorized access.|
|Insecure Network Services|Vulnerable network services compromise confidentiality, integrity, and availability.|
|Insecure Ecosystem Interfaces|Weak security controls in backend APIs, cloud, or mobile interfaces can compromise devices.|
|Lack of Secure Update Mechanism|Missing firmware validation, secure delivery, or anti-rollback mechanisms.|
|Insecure/Outdated Components|Using insecure software components or third-party hardware/software.|
|Insufficient Privacy Protection|Personal or confidential data stored insecurely without encryption.|
|Insecure Data Transfer and Storage|Sensitive data is not properly encrypted during transfer or storage.|
|Lack of Device Management|Absence of proper security mechanisms on deployed devices.|
|Insecure Default Settings|Devices with default configurations are exposed to attacks.|
|Lack of Physical Hardening|Lack of physical security measures allows unauthorized access to sensitive information.|

### ☠️ IoT Attack Surface Areas

![The image presents a comprehensive overview of IoT attack surface areas, divided into two sections: "IoT Attack Surface Areas" and "IoT Attack Surface Areas (Cont'd)". The first section is further subdivided into 10 categories, each highlighting potential vulnerabilities in IoT devices, including device memory, ecosystem access control, device physical interfaces, device web interface, device firmware, device network services, administrative interface, local data storage, and others. The second section continues this list with additional categories such as cloud web interface, update mechanism, third-party backend APIs, mobile application, vendor backend APIs, ecosystem communication, and network traffic. Each category is accompanied by a list of bullet points detailing specific attack vectors or weaknesses. The image features a white background with orange accents at the top and bottom, and a watermark reading "secury" in gray letters across the center. The overall design suggests that this image is part of a presentation or educational material focused on cybersecurity and IoT security threats.](https://api-turbo.ai/52a4586e-d864-4bf4-a73a-65567bb2ad95/bff6cc45-3335-4c36-bb7b-b95a5bf1b1ec.jpeg)

#### Device Memory

- **Clear-text Credentials:** Unencrypted credentials can lead to information leaks. Credentials should be encrypted to secure device access and communication.
- **Third-party Credentials:** Devices can be exploited using third-party credentials. Only specific functionalities should be accessible to third parties, and their credentials should be strongly encrypted.
- **Encryption Keys:** Hackers can obtain encryption keys, gaining unauthorized access. A proper key management system is crucial to protect encryption keys. Keys should not be stored with the data they decrypt.

#### Ecosystem Access Control

- **Implicit Trust Between Components:** Implicit trust can lead to malfunctions if malicious components are trusted. Each component should authenticate itself before interacting with others.
- **Enrolment Security:** Enrolling devices without restrictions can result in the installation of malicious devices. Each device should authenticate itself before enrolment.
- **Decommissioning System:** Compromised devices can put the entire system at risk. Handle them carefully by analyzing the problem and developing countermeasures.
- **Lost Access Procedures:** Failing to define each device's purpose and access level can lead to right escalation. Implement ACL at device and network levels to improve control over devices.

#### Device Physical Interfaces

- **Firmware Extraction:** Accessing firmware can expose hidden vulnerabilities. Use firmware in an encrypted form.
- **User CLI:** Allowing users access to all parts of a device can put device security at risk. Limit user access to the core of the device.
- **Admin CLI:** Exposing console access for debugging can compromise the device. Limit administrative rights and block debugging ports for live devices.
- **Privilege Escalation:** Physical access can lead to elevated access to system resources. Design firmware to restrict user access to unauthorized parts of the device.
- **Reset to Insecure State:** Physical access can reset the device's storage memory to an undesired state. Design firmware to deny access to resetting a device.
- **Removal of Storage Media:** Physical access can expose firmware, data, and credentials. Implement additional hardware-level security or hardware encryption.

#### Device Web Interface

- **SQL Injection:** Injecting malicious code to extract and modify database content. Use prepared statements with parameterized queries as a strong mitigation strategy.
- **Cross-site Scripting:** Injecting malicious code into the application to gain unauthorized access. Carefully monitor and validate all inputs.
- **Cross-site Request Forgery:** Causing a user's browser to behave abnormally on a trusted site. Adopt additional authentication data into requests to detect unauthorized requests.
- **Username Enumeration:** Finding out whether a username exists with the forgot password form. Applications should specify their own usernames and use CAPTCHA to avoid user enumeration.
- **Weak Passwords:** Easy-to-guess passwords can be brute-forced. Use strong passwords with mixed-case and alphanumeric characters. Avoid dictionary words.
- **Account Lockout:** Absence of a lockout mechanism allows brute-force password guessing. Implement a proper lockout mechanism.
- **Known Default Credentials:** Default credentials can be easily cracked. Users should change default credentials to prevent unauthorized access.

#### Device Firmware

- **Hardcoded Credentials:** Devices with default credentials set by manufacturers are vulnerable. Users need to reset default credentials.
- **Sensitive Information/URL Disclosure:** Leak of sensitive data via URLs exposes devices to attacks. Encrypt all information transmitted through URLs.
- **Encryption Keys:** Access to encryption keys can decrypt confidential data. Store encryption keys in the cloud and send them across the network when required.
- **Firmware Version Display and/or Last Update Date:** Sensitive information about the device should not be visible to all. Use separate control keys and avoid sharing them across the network.

#### Device Network Services

- **Information Disclosure:** Leak of sensitive data exposes a device to attacks. Firmware should strongly encrypt stored information.
- **Denial-of-Service:** Denial-of-service attacks can impact cloud services. Deploy an intrusion detection mechanism.
- **UPnP:** Unwanted ports like Universal Plug and Play (UPnP) are enabled by default, allowing malware to enter. Manufacturers should disable these ports by default.
- **Vulnerable UDP Services:** Vulnerable UDP services can transfer malicious files. Design firmware to disable risky services by default.
- **User and admin CLI Injection and unencrypted services:** Ensure services are appropriately encrypted and secured.

#### Administrative Interface

- SQL injection
- Cross-site scripting and Cross-site request forgery
- Username enumeration and known default credentials
- Weak passwords and account lockout
- Security/encryption and logging options
- Two-factor authentication
- Inability to wipe device

#### Local Data Storage

- **Unencrypted Data:** Clear-text communications are prone to data interception. Adopt strong encryption mechanisms.
- **Data Encrypted with Discovered Key:** Can lead to ransomware attacks. Update the device regularly and avoid opening emails from unknown sources.
- **Weak Encryption:** Weak encryption mechanisms may result in data interception. Use strong encryption techniques like transport layer security (TLS).

#### Cloud Web Interface

- **Transport Encryption:** Lack of transport encryption can result in data loss and compromised devices. Implement proper transport encryption techniques.
- SQL injection
- Cross-site scripting and Cross-site request forgery
- Username enumeration and known default credentials
- Weak passwords and account lockout
- Insecure password recovery mechanism
- Two-factor authentication

#### Update Mechanism

- **Update Sent without Encryption:** Lack of secure update transferring mechanism opens the door for cyber-attacks. Use tested and strong encryption mechanisms.
- **Updates Not Signed:** Updates from untrusted sources might contain malicious files. Verify updates are signed from a trusted source.
- **Update Verification:** The update verification mechanism verifies the updates that will be installed in a device. Keep the update verification option turned on.
- **Malicious Update:** Provides unauthorized access to attackers, using which he/she can perform malicious activities using the device. Verify the update is from a trusted source.
- **Missing Update Mechanism:** Missing update mechanisms can make the device or system prone to various online and offline attacks. Ensure any device you buy has an update mechanism installed in it.
- **No Manual Update Mechanism:** The absence of a manual update mechanism can make your device vulnerable to certain attacks. Make sure the device you buy has a manual update mechanism present in it.

#### Third-party Backend APIs

- **Unencrypted PII sent:** Unencrypted personally identifiable information (PII) can potentially identify a specific individual. PII should be kept and sent in encrypted form.
- **Device Information Leaked:** Lack of information storage security policies can lead to information leak. Firmware should incorporate security policies that keep personal as well as device information protected.
- **Location Leaked:** Leak of a device location could result in physically accessing the device and the information in it or compromising the device. Firmware should ensure that sensitive information such as location, identity, device banner, etc. is encrypted.

#### Mobile Application

- **Implicitly Trusted by Device or Cloud:** Trusting each device connected to the network or the cloud without having any doubts about it can be risky. Implementation of trust policies is appropriate to counter this problem.

#### - Username Enumeration

- **Username Enumeration:** Some web applications have a security loophole where they reveal whether an entered username exists on the system. Exploiting this vulnerability, an attacker can guess and find the username, and then, can gain access to the device with that username

## Account Lockout Vulnerability

Vulnerability: Unavailability of account lockout mechanism after a certain period of inactivity on a system can result in unauthorized access to the device by hackers.

Consideration: Account lockout mechanism incorporated in the device should lock out the user after a defined period of time so that no illegitimate users can access the account and obtain important information.

## Known Default Credentials or Weak Passwords

Vulnerability: Lack of proper authentication mechanism or known default usernames and passwords may increase the chances of a credentials leak, which can put the device at risk.

Consideration: Authentication mechanism should be used from the cloud side. Rather than transferring the credentials to the cloud every time, a mechanism such as a token should be used; keeping the token’s life span short (a few minutes) can automatically increase the security level.

## Insecure Data Storage

Vulnerability: Unsecured data storage can lead to a leak or exposure of sensitive or confidential data.

Consideration: Firmware should be designed in such a way that all data storage layers of IoT is properly protected. Some storage layers in memory are NoSQL, RDBMS, and Big Data Hadoop.

## Vendor Backend APIs

### Inherent Trust of Cloud or Mobile Application

Vulnerability: Trusting each mobile application or cloud without having any doubts about it leads to high risks. For example, a device using a malicious mobile application that may be fake or infected could result in the entire network being infected.

Consideration: The implementation of trust policies is a perfect step to counter this problem. Policies should be such that a mobile application or the cloud is properly analyzed (based on identity, script, not infected, etc.) before it can be trusted.

### Weak Authentication

Vulnerability: As security is entirely dependent on the strength of the authentication mechanism and credentials used, a weak authentication mechanism may lead to device security issues such as loss of privacy, unauthorized access, change in device settings, and infection of different device components.

Consideration: Two-factor or multi-factor authentication mechanisms should be used to increase the device’s security level.

### Weak Access Controls

Vulnerability: Failing to properly define the purpose of each device and its access level may result in a situation known as right escalation.

Consideration: Proposing a method where each device can be configured, and its functionalities can be defined. ACL should be implemented at the device and network levels, which would eventually decrease the security gaps and improve the control over the devices.

## Ecosystem Communication

### Health Checks

Vulnerability: Any vulnerability present in a health care device can be exploited by an attacker and can put a patient’s life at risk. Vulnerable medical devices are also connected to many monitors and sensors, making them potential entry points to the larger network of a hospital.

Consideration: Manufacturing companies, rather than increasing other features in healthcare devices, should increase security features, thus making it impossible for attackers to bypass the device’s security.

### Heartbeats

Vulnerability: Security flaws in a pacemaker or features that make it accessible from a remote location, can be exploited by the potential hacker, which can even result in the death of a patient.

Consideration: Manufacturing companies should emphasize more on medical device security and secure devices from potential attacks.

### Ecosystem Commands

Vulnerability: Lack of verification of any command coming from the system exposes it to exploits or attacks.

Consideration: Commands that alter the system or update the device’s configuration should have additional verification systems to check whether the command is from a genuine source.

### De-provisioning

Vulnerability: Devices that are not in use but still connected to the Internet can also lead to various attacks on the device and the network.

Consideration: Unused devices should be detached or terminated from the Internet. Removal of access to certain devices is also an effective solution to this problem.

### Pushing Updates

Vulnerability: Malicious updates from the attackers through an attachment in the email or through compromised third parties can impact the system security badly by installing unwanted or malicious files that can lead to data loss and an inability to access the device or ransom demands to get access back to the device.

Consideration: Device users should be more cautious while opening some links or attachments that seem suspicious or come from unknown sources.

## Network Traffic

### LAN

Vulnerability: The absence of robust security or configured security, lack of secure locations, and lack of network monitoring can result in problems such as connection interception, jamming signal attacks, man-in-the-middle attacks, etc.

Consideration: Before deploying a LAN, its location security must be ensured, and a software level firewall should be deployed to keep hackers away from the network.

### LAN to Internet

Vulnerability: Not having proper security infrastructure (Firewall, anti-virus, DMZ), lack of proper network monitoring, and insecure location of deployment can result in various attacks from internal or external networks.

Consideration: The very first consideration when deploying a LAN is the location. Ensure that it is secure and proper security policies and practices are followed to enhance the network’s security, making it difficult for the attacker to breach the network security.

### Short Range

Vulnerability: Short-range devices such as Bluetooth devices are vulnerable to various attacks if the frequency on which they work is known to the intruder. They can easily see all personal or sensitive information present in your device.

Consideration: In order to secure short-range communication, a good security design should be implemented to harden the device’s security.

### Non-standard

Vulnerability: Non-standardized network traffic might contain malicious files that could harm the network security and devices.

Consideration: Each piece of passing network traffic should be standardized and checked before entering or leaving the network.

## 🚨 Recognizing Different Types of IoT Threats

IoT threats such as **distributed denial-of-service (DDoS) attacks**, **man-in-the-middle attacks**, and **ransomware attacks** can compromise devices and steal sensitive data from users as well as organizations. Attackers exploit vulnerabilities in IoT devices to launch cyberattacks, and organizations should be aware of these security threats.

![Presentation slide focused on IoT threats](https://api-turbo.ai/52a4586e-d864-4bf4-a73a-65567bb2ad95/7cf1bd54-a327-4c67-8987-5eadd0ad7dcd.jpeg)

The slide above summarizes different types of Iot Threats, including DDoS, Attacks on ICS Systems, and Rolling Code Attacks.

## IoT Threats

IoT devices on the Internet have very few security protection mechanisms against various emerging threats. Attackers often exploit these poorly protected devices on the Internet to cause physical damage to the network, to wiretap communication, and also to launch disruptive attacks such as DDoS.

Here's a summary of common IoT attacks:

|Attack Type|Description|
|---|---|
|DDoS Attack|Attackers use devices as botnets to target a system or server, making them unavailable.|
|Exploiting HVAC|Attackers exploit HVAC system vulnerabilities to steal credentials and attack the network.|
|Rolling Code|Attackers jam and sniff the signal to obtain the code transferred to the vehicle’s receiver and uses it to unlock and steal the vehicle.|
|BlueBorne Attack|Attackers connect to nearby devices and exploit Bluetooth protocol vulnerabilities to compromise the device.|
|Jamming Attack|Attackers jam the signal between sender and receiver with malicious traffic, preventing communication.|
|Remote Access via Backdoor|Attackers exploit IoT device vulnerabilities to turn the device into a backdoor for network access.|
|Remote Access via Telnet|Attackers exploit an open Telnet port to obtain information shared between connected devices.|
|Sybil Attack|Attackers use multiple forged identities to create traffic congestion, affecting communication between nodes.|
|Exploit Kits|Attackers use malicious scripts to exploit poorly patched vulnerabilities in an IoT device.|
|Man-in-the-Middle Attack|Attackers intercept communication between sender and receiver, hijacking the communication.|
|Replay Attack|Attackers intercept and resend legitimate messages to perform DoS or crash the target device.|
|Forged Malicious Device|Attackers replace authentic IoT devices with malicious devices if they have physical access to the network.|
|Side Channel Attack|Attackers extract information about encryption keys by observing signals from IoT devices.|
|Ransomware Attack|Malware that uses encryption to block users’ access to devices or files.|

## 🛡️ DDoS Attack

> A DDoS attack involves multiple infected systems overwhelming a single online system or service, making it slow or unavailable to legitimate users.

![Flowchart illustrating a Distributed Denial of Service (DDoS) attack](https://api-turbo.ai/52a4586e-d864-4bf4-a73a-65567bb2ad95/ed89e658-b392-446c-9b3b-acf868731c3a.jpeg)

The image above shows the steps involved in a DDoS attack, from exploiting vulnerabilities to the target server going offline.

Steps of a DDoS attack:

1. Attacker gains remote access to vulnerable devices.
2. Malware is injected into IoT devices to turn them into botnets.
3. A command-and-control center is used to instruct botnets to send requests to the target server.
4. The target server goes offline, becoming unavailable.

## ♨️ Attack on HVAC Systems

> Attackers exploit vulnerabilities in IoT-enabled heating, ventilation, and air conditioning (HVAC) systems to steal login credentials and gain unauthorized access to networks.

![Infographic of an attack on HVAC systems](https://api-turbo.ai/52a4586e-d864-4bf4-a73a-65567bb2ad95/b8ad2dd7-d2c1-4b63-9ab0-8fce1db99648.jpeg)

As seen in the flowchart above, attackers can leverage vulnerabilities in HVAC systems to gain access to an organization's network.

Steps to exploit HVAC systems:

1. Attackers search for vulnerable ICS systems using tools like Shodan.
    - Shodan: `$https://www.shodan.io$`
2. Attackers attempt to use default user credentials with online tools.
    - Online Default Credential Tool: `$https://madifi.de/defpass/index.php$`
3. Remote access to the HVAC system is attempted through the ICS system.
4. Once accessed, the attacker can control the temperature or launch further attacks on the local network.

## 🚗 Rolling Code Attack

> A rolling code attack targets smart locking systems in vehicles by intercepting and reusing the RF signal to unlock the vehicle.

![Flowchart of a Rolling Code Attack](https://api-turbo.ai/52a4586e-d864-4bf4-a73a-65567bb2ad95/599f8571-9cd2-4a11-9a13-da69f1ddcf1c.jpeg)

As Illustrated above, a rolling code attack involves intercepting the signal from a key fob to unlock a vehicle.

Steps of a Rolling Code Attack:

1. The victim presses the car remote button to unlock the car.
2. The attacker uses a jammer to block the car's reception and sniffs the first code.
3. The victim tries again, sending a second code.
4. The attacker sniffs the second code.
5. On the second attempt, the attacker forwards the first code to unlock the car.
6. The recorded second code is used later to unlock and steal the vehicle.

Attack tools:

- `rfcat-rolljam`
- `RFCrack`

## 📱 BlueBorne Attack

> BlueBorne attacks exploit Bluetooth connections to gain full control of a target device.

![Flowchart illustrating a cyber attack on a Bluetooth-enabled printer connected to a corporate network](https://api-turbo.ai/52a4586e-d864-4bf4-a73a-65567bb2ad95/e813449a-b8f7-404c-ac56-33613733b28c.jpeg)

The image above illustrates how an attacker can discover a bluetooth device and access the corporate network through the bluetooth printer.

The BlueBorne attack:

- Can be performed on multiple IoT devices, including those running operating systems such as Android, Linux, Windows, and older versions of iOS.
- Can allow an attacker to penetrate any corporate network using that device to steal critical information of an organization and spread malware to nearby devices.
- Establishes a connection with the target Bluetooth-enabled device without even pairing with the device.

Steps to perform a BlueBorne attack:

1. The attacker discovers active Bluetooth-enabled devices nearby, even if they are not in discoverable mode.
2. After locating a nearby device, the attacker obtains its MAC address.
3. The attacker probes the target device to determine the operating system.
4. After identifying the OS, the attacker exploits vulnerabilities in the Bluetooth protocol to gain access to the target device.
5. The attacker can then perform remote code execution or man-in-the-middle attacks and take full control of the device.

## 📡 Jamming Attack

> A jamming attack obstructs communication between wireless IoT devices by sending a high volume of malicious traffic on the same frequency, causing a denial-of-service (DoS).

![Diagram illustrating the concept of a Jamming Attack](https://api-turbo.ai/52a4586e-d864-4bf4-a73a-65567bb2ad95/1b1cc6d2-4f35-40df-9dcc-9b35975d96b6.jpeg)

As shown above, a jamming attack disrupts wireless communication by sending random radio signals on the same frequency as the IoT devices.

During a jamming attack:

- An overwhelming volume of malicious traffic is sent, resulting in a DoS attack to authorized users.
- The signals or traffic generated by the jamming device appear as noise to the wireless devices.
- Devices hold their transmissions until the noise subsides, resulting in a DoS attack that prevents data transmission.

## 🏭 Smart Grid/Industrial Devices: Remote Access Using Backdoor

> Attackers use social engineering techniques to gather information and send phishing emails with malicious attachments, installing a backdoor to gain remote access to smart grid/industrial devices.

![Flowchart illustrating the process of hacking smart grid/industrial devices using a backdoor for remote access](https://api-turbo.ai/52a4586e-d864-4bf4-a73a-65567bb2ad95/d8f2dfd8-bc9b-4708-a9f4-d78de3492b56.jpeg)

The flowchart above outlines the steps used by attackers to gain unauthorized access to industrial devices through a backdoor.

Attack process:

1. Attackers gather basic information about the target organization using social engineering.
2. Phishing emails are sent to employees with malicious attachments (e.g., a Word document).
3. When an employee opens the attachment, a backdoor is automatically installed in the target system.
4. Using the backdoor, the attacker gains access to the private network of the organization.

Example attack on a power grid:

1. After gaining access to the private network, the attacker can access the supervisory control and data acquisition (SCADA) network that controls the grid.
2. The attacker replaces the legitimate firmware with malicious firmware to process commands sent by the attacker.
3. The attacker can disable the power supply to any place by sending malicious commands to the substation control systems from SCADA.

## 😈 Other IoT Attacks

### Sybil Attack

> In a Sybil attack, an attacker uses multiple forged identities to create a strong illusion of traffic congestion, affecting communication between neighboring nodes and networks.

This attack impairs potential applications in VANETs (Vehicular Ad hoc Networks) by creating chaos and security risks in the network.

How it works:

- A node spoofs itself as other nodes and launches an attack, called Sybil node “X.”
- Node “X” communicates with neighboring nodes using multiple forged identities, creating chaos and security risks in the network.

### Exploit Kits

> An exploit kit is a malicious script used by attackers to exploit poorly patched vulnerabilities in an IoT device, often adding new ways of exploitation and add-on functions automatically.

These kits send exploits to install malware, which can execute and corrupt the device.

### Man-in-the-Middle Attack

> In a man-in-the-middle attack, the attacker pretends to be a legitimate sender, intercepts all communication between the sender and receiver, and hijacks the communication.

IoT devices are connected to a network and act as a gateway to sensitive and personal information.

### Replay Attack

> In a replay attack, attackers intercept legitimate messages from a valid communication and continuously send the intercepted message to the target device to perform a denial-of-service attack or delay it in order to manipulate the message or crash the target device.

### Forged Malicious Device

> Attackers replace authentic IoT devices with malicious devices if they have physical access to the network, making it difficult to discover because the forged device resembles a legitimate device.

The forged devices contain backdoors used by attackers to perform various malicious activities in the network.

## Side Channel Attacks

Side channel attacks involve extracting encryption keys by observing signals emitted from IoT devices, such as power consumption or electromagnetic emanations. Attackers analyze these emissions to access and duplicate the encryption keys non-invasively. This method is advantageous due to its relative ease and speed in accessing encryption keys.

## Ransomware Attacks

Ransomware is a type of malware that encrypts a user's device, blocking access until a ransom is paid.

> It can be mistakenly downloaded with other malware or through malicious advertisements (malvertisements).

The phases of a ransomware attack include:

1. **Email Delivery**: The victim receives an email with a malicious attachment, appearing to be from a legitimate sender.
2. **Malware Execution**: Upon opening the attachment, malware downloads and launches processes like PowerShell, connecting the device to an attacker’s Command and Control (C&C) server. The victim's personal files are then encrypted.
3. **Ransom Notification**: A notification appears on the victim’s device, demanding payment in money or bitcoins for file access restoration.

## 🛡️ IoT Forensics

IoT forensics involves the investigation of IoT devices and their connected devices. Investigators need to understand forensic tools, data acquisition, and examination procedures.

### Introduction to IoT Forensics

IoT forensics focuses on the identification, acquisition, and analysis of digital evidence from IoT devices, sensors, and nodes.

> It is a multidisciplinary approach within digital forensics that addresses cybersecurity threats targeting IoT devices.

To conduct a forensic investigation, investigators should consider technological aspects across three zones:

- IoT Zone
- Network Zone
- Cloud Zone

These zones help in obtaining potential evidence related to the affected IoT device. The forensic analysis process includes:

1. Evidence identification and collection
2. Preservation
3. Data analysis
4. Presentation and reporting

### IoT Forensics Process

The IoT forensic process involves several key steps:

- **Evidence Identification and Collection**: Identifying affected IoT devices at the crime scene to increase the scope of the investigation.
- **Preservation**: Ensuring the evidence is properly preserved, which may involve avoiding switching off the device before data acquisition. Specialized tools are used to acquire data, and memory dumps can collect volatile data before shutdown.
- **Data Analysis**: Analyzing data stored on cloud services or mobile phones synced with IoT devices.
- **Presentation and Reporting**: Preparing a report on the evidence and forensic analysis, to be presented in court along with physical evidence.

### Case Study: Default Passwords Aid Satori IoT Botnet Attacks

Researchers discovered that the Satori botnet exploited default usernames and passwords in D-Link DSL routers.

> In late 2017, Satori infected over 260,000 home routers within 12 hours.

The botnet used a worm targeting D-Link DSL-2750B devices, leveraging exploits to launch Distributed Denial of Service (DDoS) attacks. Consumers can disable remote administration to reduce the risk.

### Challenges in IoT Forensics

IoT forensics presents several challenges:

- **Identification, Collection, and Preservation of Evidence**: Identifying devices can be difficult due to their autonomous nature, and improper documentation can hinder the process.
- **Analysis of Evidence**: Ensuring the integrity and reliability of evidence, considering the physical location of data stored in cloud facilities.
- **Autonomous Nature of IoT Devices**: Determining whether device malfunction is due to human intervention or design flaws.
- **Presentation**: Documenting findings can be challenging, as analytical processing may alter the data stored on devices.

## 🔎 Performing Forensics on IoT Devices

The forensic procedure for IoT devices varies, necessitating specific methods for IoT-based forensic examinations. Forensic methods for Android Wear and Amazon Echo devices are important to consider.

### ⌚ Wearable IoT Device: Smartwatch

Smartwatches connect to smartphones or networks via Bluetooth, Wi-Fi, GPS, and NFC, primarily for tracking exercises, checking time, messages, and emails.

Smartwatch network connections include:

- **NFC Connections**: Short-range wireless connections for device interaction.
- **Bluetooth**: Uses short wavelengths for pairing with other Bluetooth-enabled devices to build personal area networks (PANs).
- **Wi-Fi Connections**: Establishes wireless local area networking (WLAN) among IoT devices.
- **GPS Connections**: Determines the physical location of a smartwatch user.

Hackers can exploit motion sensors and GPS systems to gather sensitive user information, such as PINs, passwords, and physical location.

### Wearable IoT Device Forensics: Smartwatch

Smartwatches typically sync with a smartphone, storing data on a cloud interface or the linked mobile phone.

**Scenario**: If an Android smartwatch is found alone at a crime scene, obtaining sufficient evidence can be difficult. The investigator can follow a forensic investigative methodology, understanding the watch’s basic framework, which includes:

- Data API
- Message API
- Node API

The investigation involves image generation and data analysis.

The image below outlines the steps involved in data acquisition and analysis of Android Wear devices, differentiating between hardware and software approaches.

![Steps Involved in Data Acquisition and Analysis of Android Wear](https://api-turbo.ai/52a4586e-d864-4bf4-a73a-65567bb2ad95/e9509040-7b0f-4736-a032-8fcb94b02a70.jpeg)

### Logical Acquisition of Android Wear

Steps for logical acquisition of an Android Wear device without a paired device:

1. Enable developer options on the smartwatch.
2. Connect the watch to a Wi-Fi network (the smartwatch and forensic workstation must be on the same network).
3. Enable Wi-Fi debugging in Settings > Developer Options > Debug over Wi-Fi.
4. Obtain the smartwatch's IP address to establish a connection:
    
    ```
    adb connect <device_IP_address:port_number>
    ```
    
5. Perform logical acquisition using the `adb pull` command:
    
    ```
    adb pull <source_directory> <destination_directory>
    ```
    
    (The source directory is the device's target partition, and the destination directory is the location on the investigator’s workstation where files are copied.)

### Physical Acquisition of Android Wear

Steps for physical acquisition of an Android Wear without a paired device:

1. Establish connection between the device and the forensic workstation using Android SDK platform tools.
2. Execute the command `adb devices` and select the smartwatch from the device list.
3. Verify the device is connected by checking its serial number on the ADB command shell, then run `adb shell` to acquire root shell and perform image acquisition.
4. Execute the following command to generate a boot partition image:
    
    ```
    dd if=<source_drive> of=<destination_drive> bs=512
    ```
    
    (Note: Physical Acquisition can only be performed on a rooted device.)

### Forensic Examination of Evidence File: Android Wear

Analyze the acquired image file using a tool like Autopsy to extract valuable artifacts, such as data stored on the device, deleted files, application data, and system files.

|File name|Directory|Purpose|
|---|---|---|
|calendar.db|/data/data/com.android.providers.calendar/databases/|Stores calendar entries|
|calllog.db, contacts2.db|/data/data/com.android.providers.contacts/databases/|Contacts, call logs, and user profiles|
|downloads.db|/data/data/com.android.providers.downloads/databases/|Data present in the “Download” application|
|googlesettings.db|/data/data/com.google.android.gsf/databases/|Google Service Frameworks for Android|
|bt_did.conf, bt_stack.conf|/system/etc/bluetooth|Data associated with Bluetooth connected devices|
|android_pay, config.db|/data/data/com.google.android.gms/databases/|.db files of Google applications and APIs that support functionalities across devices|
|complications.db|/data/data/com.google.android.wearable.app/databases/|Contains complications display information|

### 🔈 IoT Device Forensics: Smart Speaker—Amazon Echo

Amazon Echo is a smart speaker and intelligent home assistant controlled via voice commands. Alexa Voice Service manages these voice commands and the operation of connected IoT devices through cloud services. The speaker can also be managed via a smartphone app.

**Scenario**: If an Amazon Echo is compromised, collecting the affected Echo and the synced smartphone allows for a comprehensive forensic investigation. Understanding the Alexa Voice Service's native artifacts and communication protocols is crucial. Alexa’s unofficial APIs, such as cards, notifications, phoenix, todos, wake-word, wifi/configs, and activities, can be useful.

The investigation begins by acquiring data from the Alexa app and web cache on the smartphone, followed by generating an image of the firmware, Alexa Pi, from the IoT device.

### Amazon Alexa Forensics: Client-based Analysis

When the Amazon Alexa app is installed and connected to the smart device (e.g., Amazon Echo Dot), the data related to device activity is stored in database files. These files must be retrieved using the `adb pull` command and parsed.

Client-centric artifacts are found in the following directories:

- `/data/data/com.amazon.dee.app/databases/map_data_storage_v2.db`
- `/data/data/com.amazon.dee.app/databases/DataStore.db`
- `/data/data/com.amazon.dee.app/app_webview/Application Cache/Cache/*`

The `map_data_storage_v2.db` file contains logged-in user information. The `DataStore.db` file maintains to-do lists and shopping lists acquired from the cloud using the todos API (primarily in earlier Alexa devices). Amazon Alexa uses WebView to display online content, serving as a potential source of digital evidence, with each cache file composed of an original URL and a data stream.

## 💾 Database Files and Client-Based Analysis

In **Client-Based analysis**, investigators look for captured responses from devices like smartphones and laptops and examine artifacts saved on local application data.

On an Android device, client-centric artifacts are typically found in these directories:

- `/data/data/com.amazon.dee.app/databases/map_data_storage_v2.db`
- `/data/data/com.amazon.dee.app/databases/DataStore.db`
- `/data/data/com.amazon.dee.app/app_webview/Application\\ Cache/Cache/*`

### SQLite Files Used by Amazon Alexa

Amazon Alexa utilizes SQLite files such as `map_data_storage.db` and `DataStore.db`.

- `map_data_storage.db`: Contains currently logged-in users in the Alexa device. Data is erased when a user signs out, but deleted records can be recovered from the SQLite database and its journal file.
- `DataStore.db`: Contains to-do lists and shopping lists acquired using the todos API from cloud services and client-centric applications. Note that this file displays content in earlier generations of Alexa devices (up to 2nd Gen).

![Viewing database files](https://api-turbo.ai/52a4586e-d864-4bf4-a73a-65567bb2ad95/19d07471-4cbc-43fa-8ff1-c56f0ef2b072.jpeg)

_Figure 16.1: Viewing database files_

The image displays a text-based interface showing a list of files or code. Specific sections are highlighted in red rectangles, emphasizing a technical or programming context.

Amazon Alexa also utilizes the **WebView class** to display online content in Android, which can serve as potential sources of digital evidence. Each cache file consists of an original URL and a data stream.

![Viewing cache files](https://api-turbo.ai/52a4586e-d864-4bf4-a73a-65567bb2ad95/8143b519-679c-4a16-97a0-f3e32051d909.jpeg)

_Figure 16.2: Viewing cache files_

The image displays a command-line interface in a Windows environment, with lines of code or text. A specific line of text at the top of the screen is highlighted in a red box.

## ☁️ Cloud-Based Analysis in Amazon Alexa Forensics

Amazon Alexa relies on cloud services for data storage and refinement, making cloud data a potential source of evidence in forensic investigations. Investigators often append URLs to extract digital data from the cloud.

### Steps to Acquire Cloud Data

1. **Parse SQLite database file to gain user ID information**
    
    - Acquire the `map_data_storage_v2.db` database file from the Alexa mobile device.

![Parsing SQLite database file to obtain UserID](https://api-turbo.ai/52a4586e-d864-4bf4-a73a-65567bb2ad95/5ab362a1-c453-4e88-af91-511f92d075f3.jpeg)

_Figure 16.3: Parsing SQLite database file to obtain UserID_

The image displays a computer program, which appears to be a database management system. A large window shows a URL, while a smaller window on the right displays a list of database tables. 2. **Build URL using User ID to pull forensic artifacts that ask for login credentials**

```
*   Obtain the user’s login credentials.
*   Add the User ID (from `map_data_storage_v2.db`) at the end of the URL.
*   Example URL to view contacts stored in Amazon Alexa:
    `https://alexa-mobile-service-na-preview.amazon.com/users/amzn1.comms.id.person.amzn1~<USER ID>/contacts`
*   **Note:** Building URLs and appending them to retrieve data from the cloud is supported by 2nd and earlier generations of Alexa devices.
```

3. **Append Amazon Alexa APIs to the URL**

```
*   Extract data such as device location, preferred time zone, deviceSerialNumber, deviceAccountId, Software version, deviceType, and supportedLocales.
*   **Note:** Limited data is obtained from the latest generations of Amazon Alexa devices.
```

![Extracting information by appending Alexa APIs](https://api-turbo.ai/52a4586e-d864-4bf4-a73a-65567bb2ad95/62ffe347-2df3-4dea-bf4e-0b7e08e9e4d8.jpeg)

_Figure 16.4: Extracting information by appending Alexa APIs_

The image depicts a web browser displaying an Amazon device preferences JSON file, containing settings such as device ID, language, and timezone.

![Amazon Alexa Forensics: Cloud-based Analysis](https://api-turbo.ai/52a4586e-d864-4bf4-a73a-65567bb2ad95/01b5dc70-e5a9-4f69-8065-bb180c806c5f.jpeg)

_The image provides a guide to Amazon Alexa Forensics, detailing steps to acquire cloud data, build URLs, and append Amazon Alexa APIs to extract information._

## 🔑 Amazon Alexa APIs

Client applications communicate with their cloud service through official and unofficial APIs.

> **Alexa Voice Service (AVS) interfaces:** These correspond to a client functionality. Each interface contains logically grouped messages called **directives** (from the cloud) and **events** (from the client).

APIs are used to store metadata containing useful information, such as how and when the data was modified or accessed. Forensic investigators can leverage these APIs to acquire cloud-based data.

![List of Amazon Alexa APIs](https://api-turbo.ai/52a4586e-d864-4bf4-a73a-65567bb2ad95/33a6e610-8324-45ae-82b5-a504cc5256f7.jpeg)

_The image presents a list of Amazon Alexa APIs, along with their URLs and descriptions._

## 🛠️ Hardware Level Analysis: JTAG and Chip-off Forensics

When software-level access to a device's physical contents is difficult, hardware-level acquisition methods like **JTAG** and **Chip-off** techniques can be used. These techniques enable investigators to perform data acquisition at the hardware level and examine the acquired data for potential artifacts.

### JTAG Forensics

> **JTAG (Joint Test Action Group) method:** Allows access to the physical contents of devices (smartphones, smartwatches) to acquire a physical image of the device’s memory chip.

Tools required:

1. Equipment to dismantle the device to reveal JTAG ports.
2. Wiring and soldering equipment to connect wires from JTAG ports to the JTAG tool.
3. JTAG software and hardware.

### Chip-Off Forensics

> **Chip-off technique:** Involves carefully extracting the memory chip from the device’s motherboard to read it with chip-reading equipment.

This is a destructive method that may result in data loss, and the removed memory chip cannot be re-fixed for reuse.

After removing the memory chip, the investigator must ensure that the chip is readable with chip-reading equipment, which includes:

1. Memory chip reading hardware.
2. Adapter to hold the chip.
3. Software running on the forensic workstation to acquire data from the chip.

**Note:** Using JTAG and Chip-Off forensics, the investigator can also recover deleted data from the extracted image file.

## 💡 Module Summary

> **Internet of Things (IoT):** Refers to physical devices embedded with sensors, software, and other technologies to collect and share data with connected devices and systems via the internet.

IoT devices are increasingly common and are vulnerable to cyber attacks. Common threats include **DDoS attacks**, **Rolling Code attacks**, **BlueBorne attacks**, **Jamming attacks**, **Ransomware attacks**, and attacks using **backdoors**.

A forensic investigator should be aware of the technologies used in the device, along with logical, physical, and cloud acquisition procedures, and tools to examine evidence files. In cases where the device is damaged or data acquisition through software is not possible, JTAG and Chip-off forensics can be used to acquire a physical image of the device.