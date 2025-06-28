const languageMap = {
            'pt-BR': './br/index.html',
            'pt-PT': './br/index.html',
            'en-US': './en-us/index.html',
            'en-GB': './en-us/index.html',
            'es-ES': './es/index.html',
            'es-AR': './es/index.html',
            'de-DE': './german/index.html'
        };

        const userLang = navigator.language || navigator.userLanguage;
        let redirectUrl = languageMap[userLang];

        if (!redirectUrl) {
            if (userLang.startsWith('pt')) {
                redirectUrl = './br/index.html';
            } else if (userLang.startsWith('en')) {
                redirectUrl = './en-us/index.html';
            } else if (userLang.startsWith('es')) {
                redirectUrl = './es/index.html';
            } else if (userLang.startsWith('de')) {
                redirectUrl = './german/index.html';
            } else {
                redirectUrl = './en-us/index.html';
            }
        }

        // Realiza o redirecionamento
        window.location.href = redirectUrl;