onload = () => {
    document.body.classList.remove("container");
};

document.addEventListener("DOMContentLoaded", function () {
    var audioElement = document.getElementById("myAudio");

    // Bắt đầu phát từ giây thứ 10
    audioElement.currentTime = 8;

    // Chơi bài nhạc
    audioElement.play().catch(function(error) {
        console.error("Không thể phát âm thanh:", error);
    });

    // === HIỆU ỨNG ĐÁNH MÁY CHỮ ===
    const greetings = [
        "Chúc mừng ngày 20/10",
        "10 điểm là biểu tượng hoàn hảo",
        "Các bạn gấp đôi hoàn hảo, các bạn 20/10",
        "Mãi mãi là những đóa hoa rực rỡ nhất"
    ];
    
    let currentGreetingIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const greetingTextElement = document.getElementById('greetingText');
    const greetingSubtextElement = document.getElementById('greetingSubtext');
    
    if (greetingTextElement) {
        greetingSubtextElement.textContent = "💐 Dành tặng những người phụ nữ tuyệt vời 💐";
        
        function typeWriter() {
            const currentText = greetings[currentGreetingIndex];
            
            if (!isDeleting && charIndex < currentText.length) {
                greetingTextElement.textContent += currentText.charAt(charIndex);
                charIndex++;
                setTimeout(typeWriter, 100);
            } else if (isDeleting && charIndex > 0) {
                greetingTextElement.textContent = currentText.substring(0, charIndex - 1);
                charIndex--;
                setTimeout(typeWriter, 50);
            } else if (!isDeleting && charIndex === currentText.length) {
                setTimeout(() => {
                    isDeleting = true;
                    typeWriter();
                }, 3000);
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                currentGreetingIndex = (currentGreetingIndex + 1) % greetings.length;
                setTimeout(typeWriter, 500);
            }
        }
        
        setTimeout(typeWriter, 2000);
    }

    // === HIỆU ỨNG TIM BAY ===
    function createHeart() {
        const heartsContainer = document.getElementById('heartsContainer');
        if (!heartsContainer) return;
        
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.innerHTML = '❤️';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = (Math.random() * 3 + 4) + 's';
        heart.style.fontSize = (Math.random() * 20 + 15) + 'px';
        heart.style.opacity = Math.random() * 0.5 + 0.3;
        
        heartsContainer.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 7000);
    }
    
    // Tạo tim mới mỗi 800ms
    setInterval(createHeart, 800);

    // === HIỆU ỨNG BƯỚM BAY ===
    function createButterfly() {
        const butterfliesContainer = document.getElementById('butterfliesContainer');
        if (!butterfliesContainer) return;
        
        const butterfly = document.createElement('div');
        butterfly.className = 'butterfly';
        butterfly.innerHTML = '🦋';
        
        const startY = Math.random() * 60 + 20;
        const startX = Math.random() > 0.5 ? -50 : window.innerWidth + 50;
        const endX = startX < 0 ? window.innerWidth + 50 : -50;
        
        butterfly.style.top = startY + 'vh';
        butterfly.style.left = startX + 'px';
        butterfly.style.fontSize = (Math.random() * 15 + 20) + 'px';
        
        butterfliesContainer.appendChild(butterfly);
        
        const duration = Math.random() * 8000 + 10000;
        const startTime = Date.now();
        
        function animateButterfly() {
            const elapsed = Date.now() - startTime;
            const progress = elapsed / duration;
            
            if (progress < 1) {
                const currentX = startX + (endX - startX) * progress;
                const wave = Math.sin(progress * Math.PI * 4) * 100;
                
                butterfly.style.left = currentX + 'px';
                butterfly.style.top = (startY + wave / 10) + 'vh';
                butterfly.style.transform = `rotate(${Math.sin(progress * Math.PI * 8) * 20}deg)`;
                
                requestAnimationFrame(animateButterfly);
            } else {
                butterfly.remove();
            }
        }
        
        animateButterfly();
    }
    
    // Tạo bướm mới mỗi 3 giây
    setInterval(createButterfly, 3000);
    // Tạo vài con bướm ngay từ đầu
    for (let i = 0; i < 3; i++) {
        setTimeout(createButterfly, i * 1000);
    }

    // === HIỆU ỨNG MƯA HOA RƠI ===
    function createPetal() {
        const petalsContainer = document.getElementById('petalsContainer');
        if (!petalsContainer) return;
        
        const petal = document.createElement('div');
        petal.className = 'petal';
        
        const petalTypes = ['🌸', '🌺', '🌼', '🌻', '💮'];
        petal.innerHTML = petalTypes[Math.floor(Math.random() * petalTypes.length)];
        
        petal.style.left = Math.random() * 100 + 'vw';
        petal.style.animationDuration = (Math.random() * 5 + 5) + 's';
        petal.style.fontSize = (Math.random() * 15 + 15) + 'px';
        petal.style.opacity = Math.random() * 0.6 + 0.4;
        
        petalsContainer.appendChild(petal);
        
        setTimeout(() => {
            petal.remove();
        }, 10000);
    }
    
    // Tạo cánh hoa rơi mỗi 500ms
    setInterval(createPetal, 500);

    // === HIỆU ỨNG ÁNH SÁNG LẤP LÁNH ===
    function createSparkle() {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.style.left = Math.random() * 100 + 'vw';
        sparkle.style.top = Math.random() * 100 + 'vh';
        sparkle.style.animationDuration = (Math.random() * 1 + 0.5) + 's';
        
        document.body.appendChild(sparkle);
        
        setTimeout(() => {
            sparkle.remove();
        }, 1500);
    }
    
    // Tạo ánh sáng lấp lánh mỗi 200ms
    setInterval(createSparkle, 200);

    // === TÙY CHỈNH MÀU HOA ===
    const flowerColorSelect = document.getElementById('flowerColor');
    if (flowerColorSelect) {
        flowerColorSelect.addEventListener('change', function() {
            const color = this.value;
            const root = document.documentElement;
            
            switch(color) {
                case 'red':
                    root.style.setProperty('--petal-color-1', '#ff0000');
                    root.style.setProperty('--petal-color-2', '#cc0000');
                    root.style.setProperty('--petal-color-3', '#990000');
                    root.style.setProperty('--petal-color-4', '#ff3333');
                    break;
                case 'purple':
                    root.style.setProperty('--petal-color-1', '#9b59b6');
                    root.style.setProperty('--petal-color-2', '#8e44ad');
                    root.style.setProperty('--petal-color-3', '#6c3483');
                    root.style.setProperty('--petal-color-4', '#bb8fce');
                    break;
                case 'blue':
                    root.style.setProperty('--petal-color-1', '#3498db');
                    root.style.setProperty('--petal-color-2', '#2980b9');
                    root.style.setProperty('--petal-color-3', '#1f618d');
                    root.style.setProperty('--petal-color-4', '#5dade2');
                    break;
                case 'yellow':
                    root.style.setProperty('--petal-color-1', '#f1c40f');
                    root.style.setProperty('--petal-color-2', '#f39c12');
                    root.style.setProperty('--petal-color-3', '#d68910');
                    root.style.setProperty('--petal-color-4', '#f4d03f');
                    break;
                default:
                    root.style.setProperty('--petal-color-1', '#ed6ea0');
                    root.style.setProperty('--petal-color-2', '#ec7c9a');
                    root.style.setProperty('--petal-color-3', '#cf6a87');
                    root.style.setProperty('--petal-color-4', '#e88ca3');
            }
        });
    }

    // === TÙY CHỈNH LỜI CHÚC ===
    const applyGreetingBtn = document.getElementById('applyGreeting');
    const customGreetingInput = document.getElementById('customGreeting');
    
    if (applyGreetingBtn && customGreetingInput) {
        applyGreetingBtn.addEventListener('click', function() {
            const customText = customGreetingInput.value.trim();
            if (customText && greetingTextElement) {
                // Dừng hiệu ứng đánh máy hiện tại
                greetingTextElement.textContent = customText;
                greetingSubtextElement.textContent = "💝 Lời chúc của bạn 💝";
                
                // Thêm hiệu ứng fade
                greetingTextElement.style.animation = 'none';
                setTimeout(() => {
                    greetingTextElement.style.animation = 'fadeInOut 3s ease-in-out infinite';
                }, 10);
            }
        });
    }

    // === TOGGLE CONTROL PANEL ===
    const togglePanelBtn = document.getElementById('togglePanel');
    const controlContent = document.getElementById('controlContent');
    
    if (togglePanelBtn && controlContent) {
        togglePanelBtn.addEventListener('click', function() {
            controlContent.classList.toggle('show');
        });
    }
});
