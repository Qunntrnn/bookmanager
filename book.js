function save() {
    let bookname = document.getElementById('bookname').value ;
    let tacgia = document.getElementById('tacgia').value ;
    let nxb = document.getElementById('nxb').value;
    let soluong = document.getElementById('soluong').value ;
    let price = document.getElementById('price').value ;

    console.log(bookname , tacgia , nxb , soluong , price);

    if (bookname && tacgia && nxb && soluong && price) {
        
        let books = localStorage.getItem('books') ? JSON.parse(localStorage.getItem('books')) : [] ;
        
        books.push(
            { 
                bookname: bookname ,
                tacgia : tacgia ,
                nxb : nxb ,
                soluong : soluong ,
                price : price ,
    
            }
        ) ;

        localStorage.setItem('books' , JSON.stringify(books)) ;

        this.renderListBooks() ;

    

        let tableContent = `<tr>
        <td>#</td>
        <td>Tên sách</td>
        <td>Tác Giả</td>
        <td>Nhà xuất bản</td>
        <td>Số lượng</td>
        <td>Giá</td>
        <td>Hành động</td>
    </tr>`;
        books.forEach((books , index) => {
            index ++
            tableContent += `<tr>
            <td> ${index} </td>
            <td>${books.bookname}</td>
            <td>${books.tacgia}</td>
            <td>${books.nxb}</td>
            <td>${books.soluong}</td>
            <td>${books.price}</td>
            <td>
                <a href='#' 'EditBook(${bookId})' >Edit</a> |  <a href='#' onclick = 'DeleteBook(${bookId})' >Delete</a>
            
            </td>
        </tr>`;
        })

        document.getElementById('grid-book').innerHTML = tableContent;
    }
}

function renderListBooks() {
    let books = localStorage.getItem('books') ? JSON.parse(localStorage.getItem('books')) : [] ;
    if (books.length === 0) {
        document.getElementById('list-book').style.display = 'none' ;
        return false ;
    }

    document.getElementById('list-book').style.display = 'block' ;

    let tableContent = `<tr>
    <td>#</td>
    <td>Tên sách</td>
    <td>Tác Giả</td>
    <td>Nhà xuất bản</td>
    <td>Số lượng</td>
    <td>Giá</td>
    <td>Hành động</td>
</tr>`;

books.forEach((books , index) => {
    let bookId = index ;
    index ++ ;
    tableContent += `<tr>
    <td> ${index} </td>
    <td>${books.bookname}</td>
    <td>${books.tacgia}</td>
    <td>${books.nxb}</td>
    <td>${books.soluong}</td>
    <td>${books.price}</td>
    <td>
        <a href='#' onclick = 'EditBook(${bookId})' >Edit</a> |  <a href='#' onclick = 'DeleteBook(${bookId})' >Delete</a>
    
    </td>
</tr>`;
})

document.getElementById('grid-book').innerHTML = tableContent;

}


function DeleteBook(id) {
    let books = localStorage.getItem('books') ? JSON.parse(localStorage.getItem('books')) : [] ;
    books.splice(id,1) ;
    localStorage.setItem('books' , JSON.stringify(books)) ;
    renderListBooks() ; 
}

function EditBook (id) {
    let books = localStorage.getItem('books') ? JSON.parse(localStorage.getItem('books')) : [] ;
    document.getElementById('bookname').value = books[id].bookname ;
    document.getElementById('tacgia').value = books[id].tacgia ;
    document.getElementById('nxb').value = books[id].nxb ;
    document.getElementById('soluong').value = books[id].soluong ;
    document.getElementById('price').value = books[id].price ;
    document.getElementById('index').value = id

    document.getElementById('save').style.display = "none" ;
    document.getElementById('update').style.display = "inline-block" ;
    
}

function updateBook() {
    let books = localStorage.getItem('books') ? JSON.parse(localStorage.getItem('books')) : [] ;
    let index = document.getElementById('index').value ;
    books[index] = {
        bookname : document.getElementById("bookname").value ,
        tacgia: document.getElementById("tacgia").value ,
        nxb: document.getElementById("nxb").value ,
        soluong: document.getElementById("soluong").value ,
        price: document.getElementById("price").value ,
        
    }

    localStorage.setItem('books' , JSON.stringify(books)) ;
    renderListBooks() ;
    document.getElementById('save').style.display = "inline-block" ;
    document.getElementById('update').style.display = "none" ;
    
}

