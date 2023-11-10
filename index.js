
class Book{
    constructor(name,author,type){
        this.name=name;
        this.author=author;
        this.type=type;

    }
}


class Display{
    add(book){
        let  str=`  <tr>
                        <td>${book.name}</td>
                        <td>${book.author}</td>
                        <td>${book.type}</td>
                    </tr>`
        
        let tableBody=document.getElementById('tableBody')
    
        tableBody.innerHTML+=str;
    }
    validate(book){
        if (book.name.length==0||book.author.length==0) {
            return false;
            
        } else {
            
            return true;
        }
    }
    clear() {
        let libraryForm = document.getElementById('libraryForm');
        libraryForm.reset();
    }
    showmsg(type, displayMessage) {
            let message = document.getElementById('message');
            let boldText;
            if(type==='success'){
                boldText = 'Success';
            }
            else{
                boldText = 'Error!';
            }
            message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                                    <strong>${boldText}:</strong> ${displayMessage}
                                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                    </button>
                                </div>`;
            setTimeout(function () {
                message.innerHTML = ''
            }, 2000);
        
        }
    

}



// adding evenrlistener to submition of form 
let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e){
    
    let name=document.getElementById('bookName').value
    let author=document.getElementById('author').value
    let type
    let fiction = document.getElementById('fiction');
    let programming = document.getElementById('programming');
    let cooking = document.getElementById('cooking');
    
    if (fiction.checked) {
        type = fiction.value;
    }
    else if (programming.checked) {
        type = programming.value;
    }
    else if (cooking.checked) {
        type = cooking.value;
    }
    
    let book =new Book(name,author,type)

    let display=new Display()
    
    // console.log(book)
    // add(book)
    // console.log(validate(book))

    if (display.validate(book)) {

        display.add(book);
        display.clear();
        display.showmsg('success', 'Your book has been successfully added')
    }
    else {
        // Show error to the user
        display.showmsg('danger', 'Sorry you cannot add this book');
    }
    // console.log('submitted')
    e.preventDefault();
    
}