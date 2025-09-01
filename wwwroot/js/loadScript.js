function loadScript(src, async = true, maxRetries = 5, retryDelay = 3000) {
    return new Promise((resolve, reject) => {
        let retryCount = 0;

        function attemptLoad() {
            // Проверяем, не загружен ли скрипт уже
            if (document.querySelector(`script[src="${src}"]`)) {
                
                resolve();
                return;
            }

            const script = document.createElement('script');
            script.src = src;
            script.async = async;

            script.onload = () => {
                
                resolve();
            };

            script.onerror = () => {
                retryCount++;

                if (retryCount < maxRetries) {
                   
                    // Пытаемся снова через 3 секунды
                    setTimeout(attemptLoad, retryDelay);
                } else {
                   
                    reject(new Error(`Не удалось загрузить скрипт: ${src} после ${maxRetries} попыток`));
                }
            };

            document.head.appendChild(script);
        }

        // Начинаем первую попытку загрузки
        attemptLoad();
    });
}

function loadScripts(scripts,priorityIsAsync=[true,false,true]) {

    // Разделяем скрипты по приоритетам
    const priority0 = [];
    const priority1 = [];
    const priority2 = [];
    const priorityAnother = [];


    // Сортируем скрипты по приоритету
    for (const [src, priority] of Object.entries(scripts)) {
        if (priority === 0) {
            priority0.push(src);
        } else if (priority === 1) {
            priority1.push(src);
        }
        else if (priority === 2) {
            priority2.push(src);
        }
        else {
            priorityAnother.push(src);
        }
    }


    // Загружаем priority 0 последовательно
    let loadChain = Promise.resolve();

    

    priority0.forEach(src => {
        loadChain = loadChain.then(() => loadScript(src, priorityIsAsync[0]));
    });

    priorityAnother.forEach(src => {
        loadChain = loadChain.then(() => loadScript(src, true));
    });


    loadChain
        .then(() => {
            priority1.forEach(src => {
                loadChain = loadChain.then(() => loadScript(src, priorityIsAsync[1]));
            });
        })
        .then(() => {
            const promises = priority2.map(src => loadScript(src, priorityIsAsync[2]));
            return Promise.all(promises);
        })
        .catch(error => {
            console.error('Ошибка загрузки:', error);
        });
}