function clickFaq(faq_idx) {
    var faqContainer = document.querySelector("#faq-container")
    var chatroomContainer = document.querySelector("#chatroom-container")
    var faq = document.querySelector(".chatroom-" + faq_idx.toString());

    faq.classList.toggle('hide');
    faqContainer.classList.toggle('hide');
    chatroomContainer.classList.toggle('hide');
}

function goBackToFaqList(faq_idx) {
    var faqContainer = document.querySelector("#faq-container")
    var chatroomContainer = document.querySelector("#chatroom-container")
    var faq = document.querySelector(".chatroom-" + faq_idx.toString());
    
    chatroomContainer.classList.toggle('hide');
    faq.classList.toggle('hide');
    faqContainer.classList.toggle('hide');
}