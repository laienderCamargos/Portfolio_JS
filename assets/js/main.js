


function updateProfileInfo(profileData) {
    const photo = document.getElementById('profile.photo');
    if (photo) {
        if (profileData.photo) {
            photo.src = profileData.photo;
        }
        photo.alt = profileData.name || '';
        console.debug('Updated photo element:', photo);
    } else {
        console.warn('Profile photo element not found (id=profile.photo)');
    }

    const name = document.getElementById('profile.name');
    if (name && profileData.name) {
        name.innerText = profileData.name;
    }


    const job = document.getElementById('profile.job');
    if (job && profileData.job) {
        job.innerText = profileData.job;
    }

    const location = document.getElementById('profile.location');
    if (location && profileData.location) {
        location.innerText = profileData.location;
    }

    const phone = document.getElementById('profile.phone');
    if (phone && profileData.phone) {
        phone.innerText = profileData.phone;
        phone.href = `tel:${profileData.phone.replace(/\s+/g, '')}`;
    }

    const email = document.getElementById('profile.email');
    if (email && profileData.email) {
        email.innerText = profileData.email;
        email.href = `mailto:${profileData.email}`;
    }


}

function updateSoftSkills(profileData) {
    const softSkills = document.getElementById('profile.skills.softSkills');

    softSkills.innerHTML = profileData.skills.softSkills.map(skill => `<li>${skill}</li>`).join('');
}

function updateHardSkills(profileData) {
    const hardSkills = document.getElementById('profile.skills.hardSkills');

    hardSkills.innerHTML = profileData.skills.hardSkills.map(skill => `<li><img src="${skill.logo}" alt="${skill.name}" title="${skill.name}"></li>`).join('');
}
(async () => {
    try {
        const profileData = await fetchProfileData();
        // console.log('profileData:', profileData);
        updateProfileInfo(profileData);
        updateSoftSkills(profileData);
        updateHardSkills(profileData);
    } catch (err) {
        console.error('Failed to load profile data:', err);
    }
})();