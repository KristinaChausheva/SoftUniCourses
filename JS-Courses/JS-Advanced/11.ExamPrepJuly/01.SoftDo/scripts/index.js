// NOTE: The comment sections inside the index.html file is an example of how suppose to be structured the current elements.
//       - You can use them as an example when you create those elements, to check how they will be displayed, just uncomment them.
//       - Also keep in mind that, the actual skeleton in judge does not have this comment sections. So do not be dependent on them!
//       - Тhey are present in the skeleton just to help you!


// This function will be invoked when the html is loaded. Check the console in the browser or index.html file.
function mySolution(){

    let sendBtn = document.getElementsByTagName('button')[0];
    let textAreaQuestion = document.getElementsByTagName('textarea')[0];
    let divPendingQuestion = document.createElement('div');
    divPendingQuestion.setAttribute('id', 'pendingQuestion');
    let pendingQuestions = document.getElementById('pendingQuestions');
    let img = document.createElement('img');
    img.setAttribute('src', './images/user.png');
    img.setAttribute('width', '32');
    img.setAttribute('heigth', '32');
    let span = document.createElement('span');
    let p = document.createElement('p');
    let username = document.getElementsByTagName('input')[0];
    let divAction = document.createElement('div');
    divAction.setAttribute('class', 'actions');
    let btnArchive = document.createElement('button');
    btnArchive.setAttribute('class', 'archive');
    btnArchive.textContent = 'Archive'
    divAction.appendChild(btnArchive);
    let btnOpen = document.createElement('button');
    btnOpen.setAttribute('class', 'open');
    btnOpen.textContent = 'Open';
    divAction.appendChild(btnOpen);
    let openQuestions = document.getElementById('openQuestions');
    let divOpenQuestion = document.createElement('div');
    divOpenQuestion.setAttribute('class', 'openQuestion');
    divOpenQuestion.appendChild(divAction);
    let buttonReply = document.createElement('button');
    buttonReply.setAttribute('class', 'action');
    buttonReply.textContent = 'Reply';
    let divActionHolder = document.createElement('div');
    divActionHolder.setAttribute('class', 'action');
    divActionHolder.appendChild(buttonReply);
    //divOpenQuestion.appendChild(buttonReply);

    let divReplySection = document.createElement('div');
    divReplySection.setAttribute('class', 'replySection');
    let inputReply = document.createElement('input');
    inputReply.setAttribute('class', 'replyInput');
    inputReply.setAttribute('type', 'text');
    inputReply.setAttribute('placeholder', 'Reply to this question here...');
    let btnReply = document.createElement('button');
    btnReply.setAttribute('class', 'reply');
    btnReply.textContent = 'Send';

    let ol = document.createElement('ol');
    ol.setAttribute('class', 'reply');
    ol.setAttribute('type', '1');
    let li = document.createElement('li');

    divOpenQuestion.appendChild(divReplySection);
    divReplySection.appendChild(inputReply);
    divReplySection.appendChild(btnReply);
    divReplySection.appendChild(ol);
    



    

    
   


    textAreaQuestion.addEventListener('input', (e) => {
        //e.preventDefault();
        textAreaQuestion.textContent = e.target.value;
        
    })
    sendBtn.addEventListener('click', (e) => {
        //e.preventDefault();
        pendingQuestions.appendChild(divPendingQuestion);
        //( `<h3>Pending Question</h3><img src ="./images/user.png width="32" height="32><span></span><p>${textAreaQuestion.textContent}</p>`);
        divPendingQuestion.appendChild(img);
        divPendingQuestion.appendChild(span);
        
        divPendingQuestion.appendChild(p);
        p.textContent = textAreaQuestion.textContent;

        if (username.value === "") {
            username = 'Anonymous';
        } else {
            username = username.value
        }
        span.textContent = username;
        pendingQuestions.appendChild(divAction);
        console.log(textAreaQuestion.textContent);
        
    })

    btnArchive.addEventListener('click', (e) => {
        pendingQuestions.removeChild(divPendingQuestion);
    });

    btnOpen.addEventListener('click', (e) => {
        openQuestions.appendChild(divOpenQuestion);
        divOpenQuestion.appendChild(img);
        divOpenQuestion.appendChild(span);
        divOpenQuestion.appendChild(p);
    });

    btnReply.addEventListener('click', (e) => {
        openQuestions.appendChild(divReplySection);
        li.textContent = inputReply.value;
        ol.appendChild(li);
    });
}
// To check out your solution, just submit mySolution() function in judge system.