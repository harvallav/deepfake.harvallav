ddocument.getElementById('tool1').addEventListener('click', function() {
    document.getElementById('tool-info').style.display = 'block';
    document.getElementById('tool-info').innerText = 'Exiftool can inspect image metadata to identify edits in images and videos.';
});

document.getElementById('tool2').addEventListener('click', function() {
    document.getElementById('tool-info').style.display = 'block';
    document.getElementById('tool-info').innerText = 'FaceForensics++ is a model designed to detect manipulated facial features in videos.';
});

document.getElementById('tool3').addEventListener('click', function() {
    document.getElementById('tool-info').style.display = 'block';
    document.getElementById('tool-info').innerText = 'Deepware Scanner is a mobile app used to detect deepfaked media content.';
});

document.getElementById('tool4').addEventListener('click', function() {
    document.getElementById('tool-info').style.display = 'block';
    document.getElementById('tool-info').innerText = 'Microsoft Video Authenticator evaluates videos and determines their authenticity.';
});

document.getElementById('trigger-alert').addEventListener('click', function() {
    document.getElementById('alert-message').style.display = 'block';
    document.getElementById('alert-message').innerText = 'Emotional Trigger Detected! Be cautious when you see something that triggers strong emotions. Verify its authenticity before reacting!';
});
