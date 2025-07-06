// Translation System
const translations = {
    en: {
        liveEarnings: "Live Earnings Today",
        priceIncreases: "Price increases in",
        heroTitle: "Discover How 2,847 Regular People Are Generating $10,000+ Per Month With AI",
        heroSubtitle: "The same AI system that took me from $0 to $47,000/month in just 6 months",
        spotsRemaining: "Only",
        spotsText: "spots remaining at this price",
        guarantee: "🔒 30-Day Money-Back Guarantee • 🏆 Lifetime Access • 📱 24/7 Support",
        featuredIn: "As Featured In",
        calculateTitle: "Calculate Your AI Income Potential",
        hoursPerDay: "Hours per day:",
        monthlyIncome: "Your potential monthly income:",
        tryAI: "Try Our AI Money-Making Assistant",
        send: "Send",
        transformation: "Your 6-Month Transformation",
        day1: "Day 1",
        before1: "Struggling with bills",
        before2: "No AI knowledge",
        before3: "Trading time for money",
        month6: "Month 6",
        after1: "$10K+ monthly income",
        after2: "AI automation expert",
        after3: "Working 4 hours/day",
        successStories: "Success Stories From Real Students",
        unlockLevel: "Unlock Your AI Income Level",
        commitment: "How committed are you to changing your life?",
        whatYouLearn: "What You'll Master",
        module1: "AI Income Foundations - Start earning your first $1000",
        module2: "Finding Your Profitable AI Niche",
        module3: "Building Your $5K/Month AI Service",
        module4: "Getting High-Paying Clients Fast",
        module5: "Scaling to $10K+ Monthly",
        readyToStart: "Ready to Transform Your Income?",
        originalPrice: "Regular Price: <s>$997</s>",
        todayOnly: "Today Only: <span class='price-amount'>$497</span>",
        currency: "$",
        currencyMultiplier: 1
    },
    ja: {
        liveEarnings: "本日のライブ収益",
        priceIncreases: "価格上昇まで",
        heroTitle: "2,847人の普通の人々がAIで月収150万円以上を稼ぐ方法を発見",
        heroSubtitle: "私をわずか6ヶ月で0円から月収700万円に導いた同じAIシステム",
        spotsRemaining: "残り",
        spotsText: "名様限定価格",
        guarantee: "🔒 30日間返金保証 • 🏆 生涯アクセス • 📱 24時間サポート",
        featuredIn: "掲載メディア",
        calculateTitle: "あなたのAI収入の可能性を計算",
        hoursPerDay: "1日の作業時間：",
        monthlyIncome: "あなたの潜在月収：",
        tryAI: "AI収益化アシスタントを試す",
        send: "送信",
        transformation: "あなたの6ヶ月の変化",
        day1: "初日",
        before1: "請求書に苦労",
        before2: "AI知識ゼロ",
        before3: "時間をお金に交換",
        month6: "6ヶ月目",
        after1: "月収150万円以上",
        after2: "AI自動化エキスパート",
        after3: "1日4時間勤務",
        successStories: "実際の受講生の成功事例",
        unlockLevel: "あなたのAI収入レベルを解放",
        commitment: "人生を変える覚悟はありますか？",
        whatYouLearn: "マスターする内容",
        module1: "AI収入の基礎 - 最初の15万円を稼ぐ",
        module2: "収益性の高いAIニッチを見つける",
        module3: "月収75万円のAIサービスを構築",
        module4: "高額クライアントを素早く獲得",
        module5: "月収150万円以上に拡大",
        readyToStart: "収入を変革する準備はできましたか？",
        originalPrice: "通常価格：<s>¥149,550</s>",
        todayOnly: "本日限定：<span class='price-amount'>¥74,550</span>",
        currency: "¥",
        currencyMultiplier: 150
    },
    ko: {
        liveEarnings: "오늘의 실시간 수익",
        priceIncreases: "가격 인상까지",
        heroTitle: "2,847명의 평범한 사람들이 AI로 월 1,300만원 이상을 벌고 있는 방법을 발견하세요",
        heroSubtitle: "저를 단 6개월 만에 0원에서 월 6,100만원으로 이끈 동일한 AI 시스템",
        spotsRemaining: "이 가격으로 남은 자리",
        spotsText: "명뿐",
        guarantee: "🔒 30일 환불 보장 • 🏆 평생 액세스 • 📱 24/7 지원",
        featuredIn: "미디어 소개",
        calculateTitle: "당신의 AI 수입 잠재력 계산",
        hoursPerDay: "하루 작업 시간:",
        monthlyIncome: "예상 월 수입:",
        tryAI: "AI 수익화 어시스턴트 체험",
        send: "전송",
        transformation: "당신의 6개월 변화",
        day1: "첫날",
        before1: "청구서로 고생",
        before2: "AI 지식 없음",
        before3: "시간을 돈으로 교환",
        month6: "6개월째",
        after1: "월 1,300만원 이상 수입",
        after2: "AI 자동화 전문가",
        after3: "하루 4시간 근무",
        successStories: "실제 수강생 성공 사례",
        unlockLevel: "당신의 AI 수입 레벨 해제",
        commitment: "인생을 바꿀 준비가 되셨나요?",
        whatYouLearn: "마스터할 내용",
        module1: "AI 수입 기초 - 첫 130만원 벌기",
        module2: "수익성 높은 AI 틈새 찾기",
        module3: "월 650만원 AI 서비스 구축",
        module4: "고액 클라이언트 빠르게 확보",
        module5: "월 1,300만원 이상으로 확장",
        readyToStart: "수입 변화를 시작할 준비가 되셨나요?",
        originalPrice: "정가: <s>₩1,292,200</s>",
        todayOnly: "오늘만: <span class='price-amount'>₩646,100</span>",
        currency: "₩",
        currencyMultiplier: 1300
    },
    'zh-tw': {
        liveEarnings: "今日即時收益",
        priceIncreases: "價格上漲倒數",
        heroTitle: "發現2,847位普通人如何使用AI每月賺取超過31萬台幣",
        heroSubtitle: "同樣的AI系統讓我在短短6個月內從0元增長到每月146萬台幣",
        spotsRemaining: "僅剩",
        spotsText: "個名額享有此價格",
        guarantee: "🔒 30天退款保證 • 🏆 終身存取 • 📱 24/7支援",
        featuredIn: "媒體報導",
        calculateTitle: "計算您的AI收入潛力",
        hoursPerDay: "每日工作時數：",
        monthlyIncome: "您的潛在月收入：",
        tryAI: "試用我們的AI賺錢助手",
        send: "發送",
        transformation: "您的6個月轉變",
        day1: "第1天",
        before1: "為帳單煩惱",
        before2: "沒有AI知識",
        before3: "用時間換金錢",
        month6: "第6個月",
        after1: "月收入31萬+台幣",
        after2: "AI自動化專家",
        after3: "每天工作4小時",
        successStories: "真實學員成功案例",
        unlockLevel: "解鎖您的AI收入等級",
        commitment: "您有多堅定要改變生活？",
        whatYouLearn: "您將精通的內容",
        module1: "AI收入基礎 - 開始賺取第一筆3萬台幣",
        module2: "尋找有利可圖的AI利基",
        module3: "建立月入15萬台幣的AI服務",
        module4: "快速獲得高薪客戶",
        module5: "擴展到月入31萬+台幣",
        readyToStart: "準備好改變您的收入了嗎？",
        originalPrice: "原價：<s>NT$30,814</s>",
        todayOnly: "今日特價：<span class='price-amount'>NT$15,407</span>",
        currency: "NT$",
        currencyMultiplier: 31
    },
    'es-mx': {
        liveEarnings: "Ganancias en Vivo Hoy",
        priceIncreases: "El precio aumenta en",
        heroTitle: "Descubre Cómo 2,847 Personas Comunes Generan $170,000+ MXN al Mes con IA",
        heroSubtitle: "El mismo sistema de IA que me llevó de $0 a $800,000 MXN/mes en solo 6 meses",
        spotsRemaining: "Solo",
        spotsText: "lugares disponibles a este precio",
        guarantee: "🔒 Garantía de 30 días • 🏆 Acceso de por vida • 📱 Soporte 24/7",
        featuredIn: "Presentado en",
        calculateTitle: "Calcula Tu Potencial de Ingresos con IA",
        hoursPerDay: "Horas al día:",
        monthlyIncome: "Tu ingreso mensual potencial:",
        tryAI: "Prueba Nuestro Asistente de IA para Ganar Dinero",
        send: "Enviar",
        transformation: "Tu Transformación en 6 Meses",
        day1: "Día 1",
        before1: "Luchando con las cuentas",
        before2: "Sin conocimiento de IA",
        before3: "Intercambiando tiempo por dinero",
        month6: "Mes 6",
        after1: "Ingresos de $170,000+ MXN/mes",
        after2: "Experto en automatización IA",
        after3: "Trabajando 4 horas/día",
        successStories: "Historias de Éxito de Estudiantes Reales",
        unlockLevel: "Desbloquea Tu Nivel de Ingresos con IA",
        commitment: "¿Qué tan comprometido estás para cambiar tu vida?",
        whatYouLearn: "Lo Que Dominarás",
        module1: "Fundamentos de Ingresos con IA - Gana tus primeros $17,000 MXN",
        module2: "Encontrando Tu Nicho Rentable de IA",
        module3: "Construyendo Tu Servicio de IA de $85,000 MXN/mes",
        module4: "Consiguiendo Clientes de Alto Pago Rápido",
        module5: "Escalando a $170,000+ MXN Mensuales",
        readyToStart: "¿Listo para Transformar Tus Ingresos?",
        originalPrice: "Precio Regular: <s>$16,898 MXN</s>",
        todayOnly: "Solo Hoy: <span class='price-amount'>$8,449 MXN</span>",
        currency: "$",
        currencyMultiplier: 17
    },
    tl: {
        liveEarnings: "Live na Kita Ngayon",
        priceIncreases: "Tataas ang presyo sa",
        heroTitle: "Alamin Kung Paano 2,847 Karaniwang Tao ay Kumikita ng ₱560,000+ Buwanan Gamit ang AI",
        heroSubtitle: "Ang parehong AI system na nagdala sa akin mula ₱0 hanggang ₱2,600,000/buwan sa loob lamang ng 6 na buwan",
        spotsRemaining: "Tanging",
        spotsText: "slots na lang sa presyong ito",
        guarantee: "🔒 30-Araw Money-Back Guarantee • 🏆 Lifetime Access • 📱 24/7 Support",
        featuredIn: "Napakita sa",
        calculateTitle: "Kalkulahin ang Iyong AI Income Potential",
        hoursPerDay: "Oras bawat araw:",
        monthlyIncome: "Ang iyong potensyal na buwanang kita:",
        tryAI: "Subukan ang Aming AI Money-Making Assistant",
        send: "Ipadala",
        transformation: "Ang Iyong 6-Buwan na Pagbabago",
        day1: "Araw 1",
        before1: "Nahihirapan sa mga bayarin",
        before2: "Walang kaalaman sa AI",
        before3: "Ipinagpapalit ang oras sa pera",
        month6: "Buwan 6",
        after1: "₱560,000+ buwanang kita",
        after2: "AI automation expert",
        after3: "Nagtatrabaho 4 na oras/araw",
        successStories: "Mga Success Story mula sa Tunay na Estudyante",
        unlockLevel: "I-unlock ang Iyong AI Income Level",
        commitment: "Gaano ka ka-committed na baguhin ang iyong buhay?",
        whatYouLearn: "Ang Iyong Magiging Master",
        module1: "AI Income Foundations - Simulan kumita ng iyong unang ₱56,000",
        module2: "Paghahanap ng Iyong Profitable AI Niche",
        module3: "Pagbuo ng Iyong ₱280,000/Buwan na AI Service",
        module4: "Pagkuha ng High-Paying Clients Nang Mabilis",
        module5: "Pag-scale sa ₱560,000+ Buwanan",
        readyToStart: "Handa Ka Bang Baguhin ang Iyong Kita?",
        originalPrice: "Regular na Presyo: <s>₱55,664</s>",
        todayOnly: "Ngayon Lang: <span class='price-amount'>₱27,832</span>",
        currency: "₱",
        currencyMultiplier: 56
    }
};

// Testimonials data
const testimonialData = {
    en: [
        {
            name: "Sarah Mitchell",
            location: "Austin, TX",
            income: "$8,420/month",
            story: "I was struggling to pay rent just 3 months ago. Now I run a thriving AI content agency with 5 regular clients!",
            avatar: "https://ui-avatars.com/api/?name=Sarah+Mitchell&background=00ff88&color=0a0a0a"
        },
        {
            name: "Mike Chen",
            location: "San Francisco, CA",
            income: "$12,300/month",
            story: "Quit my tech job after 2 months. AI consulting pays 3x more with half the stress. Best decision ever.",
            avatar: "https://ui-avatars.com/api/?name=Mike+Chen&background=7c3aed&color=fff"
        },
        {
            name: "Jessica Rodriguez",
            location: "Miami, FL",
            income: "$6,850/month",
            story: "Single mom of 2. This course gave me financial freedom working just 4 hours/day from home.",
            avatar: "https://ui-avatars.com/api/?name=Jessica+Rodriguez&background=ff00ff&color=fff"
        }
    ],
    ja: [
        {
            name: "田中 健二",
            location: "東京",
            income: "¥1,263,000/月",
            story: "会社員を辞めて、AIコンサルタントとして独立。収入が3倍になりました。",
            avatar: "https://ui-avatars.com/api/?name=Kenji+Tanaka&background=00ff88&color=0a0a0a"
        },
        {
            name: "山田 美咲",
            location: "大阪",
            income: "¥845,000/月",
            story: "主婦をしながら、AIライティングサービスを始めました。家族との時間も増えました。",
            avatar: "https://ui-avatars.com/api/?name=Misaki+Yamada&background=7c3aed&color=fff"
        },
        {
            name: "鈴木 太郎",
            location: "名古屋",
            income: "¥1,845,000/月",
            story: "フリーランスエンジニアでしたが、AI自動化サービスで収入が5倍に。",
            avatar: "https://ui-avatars.com/api/?name=Taro+Suzuki&background=ff00ff&color=fff"
        }
    ],
    ko: [
        {
            name: "김민수",
            location: "서울",
            income: "₩10,946,000/월",
            story: "평범한 직장인이었지만 AI 컨설팅으로 독립했습니다. 수입이 4배 증가했어요.",
            avatar: "https://ui-avatars.com/api/?name=Minsu+Kim&background=00ff88&color=0a0a0a"
        },
        {
            name: "이지은",
            location: "부산",
            income: "₩8,905,000/월",
            story: "육아맘으로 집에서 AI 콘텐츠 서비스를 시작했습니다. 경제적 자유를 얻었어요.",
            avatar: "https://ui-avatars.com/api/?name=Jieun+Lee&background=7c3aed&color=fff"
        },
        {
            name: "박성호",
            location: "인천",
            income: "₩15,990,000/월",
            story: "대학생인데 AI 자동화로 학비 걱정이 사라졌습니다. 미래가 밝아요!",
            avatar: "https://ui-avatars.com/api/?name=Sungho+Park&background=ff00ff&color=fff"
        }
    ]
};

// Social proof popup data
const socialProofData = {
    en: [
        { name: "John D.", location: "New York", action: "just enrolled in the course" },
        { name: "Emma S.", location: "Los Angeles", action: "started earning $2,000 this week" },
        { name: "David L.", location: "Chicago", action: "quit his job after 3 months" },
        { name: "Lisa M.", location: "Houston", action: "reached $5K/month milestone" }
    ],
    ja: [
        { name: "佐藤様", location: "横浜", action: "コースに登録しました" },
        { name: "高橋様", location: "福岡", action: "今週30万円を稼ぎました" },
        { name: "伊藤様", location: "札幌", action: "3ヶ月で独立しました" }
    ],
    ko: [
        { name: "최씨", location: "대전", action: "코스에 등록했습니다" },
        { name: "정씨", location: "광주", action: "이번 주 260만원을 벌었습니다" },
        { name: "강씨", location: "대구", action: "3개월 만에 퇴사했습니다" }
    ]
};

// AI Chat responses
const aiResponses = {
    en: [
        "Great question! Most students start earning within 7-14 days using our proven templates.",
        "AI services are in huge demand. Businesses pay $500-5000 for simple automation tasks.",
        "You don't need any technical skills. If you can use ChatGPT, you can do this!",
        "The average student reaches $5K/month within 60 days following our system.",
        "Start with content creation services - they're easiest and most profitable!"
    ],
    ja: [
        "素晴らしい質問です！ほとんどの生徒は7〜14日以内に収益を上げ始めます。",
        "AIサービスは需要が高いです。企業は簡単な自動化に7万〜75万円を支払います。",
        "技術的なスキルは必要ありません。ChatGPTが使えれば大丈夫です！",
        "平均的な生徒は60日以内に月収75万円に達します。",
        "コンテンツ作成サービスから始めましょう - 最も簡単で収益性が高いです！"
    ],
    ko: [
        "좋은 질문입니다! 대부분의 학생들은 7-14일 내에 수익을 올리기 시작합니다.",
        "AI 서비스는 수요가 높습니다. 기업들은 간단한 자동화에 65만원~650만원을 지불합니다.",
        "기술적인 기술은 필요 없습니다. ChatGPT를 사용할 수 있다면 가능합니다!",
        "평균적인 학생은 60일 이내에 월 650만원에 도달합니다.",
        "콘텐츠 제작 서비스부터 시작하세요 - 가장 쉽고 수익성이 높습니다!"
    ]
};

// Initialize language
let currentLang = 'en';

// DOM Elements
const languageSelector = document.getElementById('language-selector');
const incomeValue = document.getElementById('income-value');
const countdown = document.getElementById('countdown');
const hoursSlider = document.getElementById('hours-slider');
const hoursDisplay = document.getElementById('hours-display');
const calculatedIncome = document.getElementById('calculated-income');
const chatInput = document.getElementById('chat-input');
const sendBtn = document.getElementById('send-btn');
const chatMessages = document.getElementById('chat-messages');
const quizBtns = document.querySelectorAll('.quiz-btn');
const quizResult = document.getElementById('quiz-result');
const socialPopup = document.getElementById('social-popup');

// Loading screen
window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('loading-screen').style.opacity = '0';
        setTimeout(() => {
            document.getElementById('loading-screen').style.display = 'none';
        }, 500);
    }, 1500);
});

// Custom cursor (desktop only)
if (window.matchMedia('(min-width: 768px)').matches) {
    const cursor = document.querySelector('.cursor');
    const follower = document.querySelector('.cursor-follower');
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        
        setTimeout(() => {
            follower.style.left = e.clientX + 'px';
            follower.style.top = e.clientY + 'px';
        }, 100);
    });
}

// Particles
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 15 + 's';
        particle.style.animationDuration = (15 + Math.random() * 10) + 's';
        particlesContainer.appendChild(particle);
    }
}
createParticles();

// Income counter animation
function updateIncomeCounter() {
    const increment = Math.floor(Math.random() * 100) + 50;
    const current = parseInt(incomeValue.textContent.replace(/,/g, ''));
    const newValue = current + increment;
    incomeValue.textContent = newValue.toLocaleString();
}
setInterval(updateIncomeCounter, 3000);

// Countdown timer
function updateCountdown() {
    const now = new Date();
    const midnight = new Date(now);
    midnight.setHours(24, 0, 0, 0);
    
    const diff = midnight - now;
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    countdown.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}
setInterval(updateCountdown, 1000);
updateCountdown();

// Scarcity counter
let spots = 12;
function updateScarcity() {
    if (spots > 3) {
        spots--;
        document.querySelector('.spots-number').textContent = spots;
    }
}
setInterval(updateScarcity, 45000);

// Income calculator
hoursSlider.addEventListener('input', function() {
    const hours = this.value;
    hoursDisplay.textContent = hours;
    
    const hourlyRate = 50;
    const monthlyIncome = hours * hourlyRate * 30;
    const multiplier = translations[currentLang].currencyMultiplier;
    const currency = translations[currentLang].currency;
    
    calculatedIncome.textContent = currency + (monthlyIncome * multiplier).toLocaleString();
});

// AI Chat
function addMessage(message, isUser = false) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `chat-message ${isUser ? 'user-message' : 'ai-message'}`;
    messageDiv.textContent = message;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

sendBtn.addEventListener('click', () => {
    const message = chatInput.value.trim();
    if (message) {
        addMessage(message, true);
        chatInput.value = '';
        
        setTimeout(() => {
            const responses = aiResponses[currentLang] || aiResponses.en;
            const response = responses[Math.floor(Math.random() * responses.length)];
            addMessage(response);
        }, 1000);
    }
});

chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendBtn.click();
    }
});

// Timeline slider
const timelineDivider = document.getElementById('timeline-divider');
let isDragging = false;

timelineDivider.addEventListener('mousedown', () => isDragging = true);
document.addEventListener('mouseup', () => isDragging = false);
document.addEventListener('mousemove', (e) => {
    if (isDragging) {
        const container = document.querySelector('.timeline-container');
        const rect = container.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const percentage = (x / rect.width) * 100;
        
        if (percentage > 20 && percentage < 80) {
            timelineDivider.style.left = percentage + '%';
        }
    }
});

// Quiz functionality
quizBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        const level = this.dataset.level;
        let result = '';
        
        switch(level) {
            case 'beginner':
                result = "You're curious! Perfect starting point. This course will take you from zero to $5K/month.";
                break;
            case 'serious':
                result = "You're ready! Students at your level typically reach $10K/month within 90 days.";
                break;
            case 'committed':
                result = "You're ALL IN! 🔥 This is the mindset of our $50K+/month earners. Let's GO!";
                break;
        }
        
        quizResult.textContent = result;
        quizResult.style.display = 'block';
    });
});

// Language switching
function updateLanguage(lang) {
    currentLang = lang;
    
    // Update all text elements
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.dataset.translate;
        if (translations[lang] && translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });
    
    // Update testimonials
    updateTestimonials(lang);
    
    // Update currency in calculator
    const hours = hoursSlider.value;
    const hourlyRate = 50;
    const monthlyIncome = hours * hourlyRate * 30;
    const multiplier = translations[lang].currencyMultiplier;
    const currency = translations[lang].currency;
    
    calculatedIncome.textContent = currency + (monthlyIncome * multiplier).toLocaleString();
}

// Update testimonials
function updateTestimonials(lang) {
    const container = document.getElementById('testimonials-container');
    container.innerHTML = '';
    
    const testimonials = testimonialData[lang] || testimonialData.en;
    
    testimonials.forEach(testimonial => {
        const card = document.createElement('div');
        card.className = 'testimonial-card';
        card.innerHTML = `
            <div class="testimonial-header">
                <img src="${testimonial.avatar}" alt="${testimonial.name}">
                <div>
                    <h4>${testimonial.name}</h4>
                    <p>${testimonial.location}</p>
                </div>
            </div>
            <p class="testimonial-income">${testimonial.income}</p>
            <p>${testimonial.story}</p>
        `;
        container.appendChild(card);
    });
}

// Initialize testimonials
updateTestimonials('en');

// Language selector
languageSelector.addEventListener('change', (e) => {
    updateLanguage(e.target.value);
});

// Social proof popup
function showSocialProof() {
    const proofs = socialProofData[currentLang] || socialProofData.en;
    const proof = proofs[Math.floor(Math.random() * proofs.length)];
    
    document.getElementById('popup-avatar').src = `https://ui-avatars.com/api/?name=${proof.name}&background=00ff88&color=0a0a0a`;
    document.getElementById('popup-name').textContent = proof.name;
    document.getElementById('popup-location').textContent = proof.location;
    document.getElementById('popup-action').textContent = proof.action;
    
    socialPopup.classList.add('show');
    
    setTimeout(() => {
        socialPopup.classList.remove('show');
    }, 5000);
}

// Show social proof every 10-20 seconds
setInterval(() => {
    showSocialProof();
}, Math.random() * 10000 + 10000);

// PayPal Integration
function initPayPal() {
    const prices = {
        'en': 497,
        'ja': 74550,
        'ko': 646100,
        'zh-tw': 15407,
        'es-mx': 8449,
        'tl': 27832
    };
    
    // First button
    paypal.Buttons({
        createOrder: function(data, actions) {
            const price = prices[currentLang] || prices['en'];
            return actions.order.create({
                purchase_units: [{
                    amount: {
                        value: price.toString()
                    }
                }]
            });
        },
        onApprove: function(data, actions) {
            return actions.order.capture().then(function(details) {
                // Redirect to course access page
                window.location.href = 'course-access.html?order=' + details.id;
            });
        }
    }).render('#paypal-button-container');
    
    // Second button
    paypal.Buttons({
        createOrder: function(data, actions) {
            const price = prices[currentLang] || prices['en'];
            return actions.order.create({
                purchase_units: [{
                    amount: {
                        value: price.toString()
                    }
                }]
            });
        },
        onApprove: function(data, actions) {
            return actions.order.capture().then(function(details) {
                // Redirect to course access page
                window.location.href = 'course-access.html?order=' + details.id;
            });
        }
    }).render('#paypal-button-container-2');
}

// Initialize PayPal when ready
if (typeof paypal !== 'undefined') {
    initPayPal();
}