import { libraryData } from './data.js';

const libraryRoot = document.getElementById('library-root');

// সম্পূর্ণ অ্যাপের UI ডাইনামিকভাবে তৈরি করার ফাংশন
function renderLibrary() {
    let htmlContent = '';

    libraryData.forEach(cls => {
        htmlContent += `
            <div class="accordion-item">
                <button class="accordion-toggle class-btn" style="background: ${cls.themeColor}; box-shadow: 0 6px 0 #222;">
                    <span class="btn-text"><i class="fa-solid ${cls.icon} icon-pop"></i> ${cls.className}</span>
                </button>
                <div class="accordion-content subjects-container">
                    ${cls.subjects.map(sub => `
                        <div class="accordion-item">
                            <button class="accordion-toggle subject-btn ${sub.btnClass}">
                                <span class="btn-text"><i class="fa-solid ${sub.icon}"></i> ${sub.subjectName}</span>
                            </button>
                            <div class="accordion-content chapters-container">
                                <ul class="chapter-list">
                                    ${sub.chapters.map((ch, index) => `
                                        <li>
                                            <a href="${ch.url}" target="_blank">
                                                <span class="badge">${index + 1}</span> ${ch.title}
                                            </a>
                                        </li>
                                    `).join('')}
                                </ul>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    });

    libraryRoot.innerHTML = htmlContent;
    initAccordionLogic();
}

// ক্লিক ইভেন্ট হ্যান্ডলার (৩ডি পুশ ইফেক্ট সহ)
function initAccordionLogic() {
    document.querySelectorAll('.accordion-toggle').forEach(button => {
        button.addEventListener('click', (e) => {
            // ইভেন্ট বাবলিং থামানোর জন্য
            e.stopPropagation();
            
            const content = button.nextElementSibling;
            button.classList.toggle('active');
            
            if (content.style.maxHeight && content.style.maxHeight !== '0px') {
                content.style.maxHeight = '0px';
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
                
                // নেস্টেড কন্টেইনারের হাইট ঠিক করা
                let parent = button.closest('.subjects-container');
                while (parent) {
                    parent.style.maxHeight = (parent.scrollHeight + content.scrollHeight) + "px";
                    parent = parent.parentElement.closest('.subjects-container');
                }
            }
        });
    });
}

// অ্যাপ চালু করা
renderLibrary();
