const addForm=document.querySelector('.add');
const list=document.querySelector('.todos');
const search=document.querySelector('.search input') // we are grabbing the input because we are listening to a keyup event on the input and not a submit event on the form.
const generateTemplate = todo => {
 
    const html=`<li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${todo}</span>
    <i class="far fa-trash-alt delete"></i>
    </li>`;
    

     list.innerHTML+=html;

};


addForm.addEventListener('submit',e=>{
    e.preventDefault();
    const todo=addForm.add.value.trim(); 
    if(todo.length){
        generateTemplate(todo); 
        addForm.reset(); // resets the input fields inside a form
     
    }

});

list.addEventListener('click',e =>{                             // we add an eventlistener to the whole listthat is the ul tag instead of attaching them to individual trashcans ,
                                                                // because this will increase the work of javascript and also whwn we add a new item to the list, we need to manually add the eventlistener to the newly added item.adding it to the ul tag is known as event delegation.
    if(e.target.classList.contains('delete')){            // contains is a function which sees to that the classlist of the target element matvhes the mentioned delete class.it ensures that the area we have clicked on contains the trashcan.
        e.target.parentElement.remove();                // as our target is trashcan, presently, but we need to remove the list item so we now access the parentelement to remove it.
    }
});


const filterTodos=(term)=>{
  
   Array.from(list.children)
                                                               // list grabs the ul tag while list.children grabs its children that is the li tag, but the output of this is a html collection , on which we cannot apply array methods, so we need to convert this to array, which we do using Array.from method.
      .filter((todo)=> !todo.textContent.toLowerCase().includes(term))
                                                            // this statement without the exclamation mark will return those todos that match with the search term.
      .forEach((todo)=>todo.classList.add('filtered'));


Array.from(list.children)
//                                                                       // list grabs the ul tag while list.children grabs its children that is the li tag, but the output of this is a html collection , on which we cannot apply array methods, so we need to convert this to array, which we do using Array.from method.
 .filter((todo)=> todo.textContent.toLowerCase().includes(term))
//                                                                           // this statement without the exclamation mark will return those todos that match with the search term.
  .forEach((todo)=>todo.classList.remove('filtered'));

   // the todos that  do not match with the search term are assigned a class of filtered and those that match ,the class of filtered is removed
};

// keyup event
search.addEventListener('keyup',()=>{
 const term= search.value.trim().toLowerCase(); // grabbing each and every key typed by the user.
  filterTodos(term);  // term refers to the input given by the user at a particular moment in time.

});














