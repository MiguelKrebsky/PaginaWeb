var isButtonClicked = false;

document.getElementById('moreInfo').addEventListener('click', function() {
    if (!isButtonClicked) {
        var description = document.getElementById('description1');
        description.innerHTML += '<br/><br/><br/><span style="font-size:20px; font-weight: bold;  ">Ele também contém ingredientes que nutrem o cabelo e promovem o crescimento saudável do cabelo.';
        isButtonClicked = true;
    }
});

document.getElementById('addComment').addEventListener('click', function() {
    var commentInput = document.getElementById('commentInput');
    var comments = document.getElementById('comments');
    
    var newComment = document.createElement('div');
    newComment.className = 'comment';
    newComment.textContent = commentInput.value;
    
    comments.appendChild(newComment);
    
    commentInput.value = '';
});

/*document.getElementById('footer').addEventListener('click', function() {
    alert('Obrigado por clicar em "Entre em contato conosco". Em breve entraremos em contato com você!');
});*/