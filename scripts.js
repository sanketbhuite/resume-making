        function generateResume() {
            document.getElementById('resumeName').innerText = document.getElementById('name').value;
            document.getElementById('resumeTitle').innerText = document.getElementById('title').value;

            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const website = document.getElementById('website').value;
            const linkedin = document.getElementById('linkedin').value;
            const contactInfo = `Email: ${email} | Phone: ${phone} | Website: ${website} | LinkedIn: ${linkedin}`;
            document.getElementById('resumeContact').innerText = contactInfo;

            document.getElementById('resumeSummary').innerText = document.getElementById('summary').value;

            const experience = document.getElementById('experience').value.split('\n').map(exp => `<div class="job"><p>${exp}</p></div>`).join('');
            document.getElementById('resumeExperience').innerHTML = experience;

            const education = document.getElementById('education').value.split('\n').map(edu => `<div class="education"><p>${edu}</p></div>`).join('');
            document.getElementById('resumeEducation').innerHTML = education;

            const skills = document.getElementById('skills').value.split(',').map(skill => `<li>${skill.trim()}</li>`).join('');
            document.getElementById('resumeSkills').innerHTML = skills;
        }
