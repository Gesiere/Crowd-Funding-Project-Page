const hamburger = document.querySelector('.hamburger');
const close_btn = document.querySelector('.closebtn');
const mobile_menu = document.querySelector('.mobile-menu');
const overlay = document.querySelector('.overlay');
const body = document.querySelector('body');
const bookmark = document.querySelector('.bookmark');
const bookmark_text = document.querySelector('.bookmark-text')
const back_btn = document.getElementById('backed-project');
const modal = document.querySelector('.modal');
const close_modal = document.querySelector('.close-modal');
const radio = document.querySelectorAll('.radio-selected');
const buttons = document.querySelectorAll('.about-project .btn');
const continue_btn = document.querySelectorAll('.pledge-input .btn')
const modal_item = document.querySelectorAll('.modal-items');
const input = document.querySelectorAll('.pledge-input input');
const pop_up_completed = document.querySelector('.completed');
const cta_completed = document.querySelector('.completed .btn');
const heading = document.querySelectorAll('.modal-items h4');





// reset modal

function reset() {
    bookmark.classList.remove('bookmarked'); bookmark_text.textContent = 'Bookmark';
    modal_item.forEach(item => {
        item.classList.remove('select');
    })
    radio.forEach(select => {
        select.classList.remove('select');
        select.checked = false
    });
    document.querySelectorAll('.pledge-container').forEach(pledge =>{
        pledge.classList.remove('select');
    });

    input.forEach(int => {
        int.value = '';
        int.classList.remove('select');
    });
    document.querySelectorAll('hr').forEach(hr_line => {
        hr_line.classList.remove('select');
    })
    // console.log(select);
}



// reset()

// MOBILE MENU
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('hidden');
    overlay.classList.toggle('hidden');
    mobile_menu.classList.toggle('hidden');
    close_btn.classList.toggle('hidden');
    body.classList.add('noscroll');
});

close_btn.addEventListener('click', () => {
    hamburger.classList.toggle('hidden');
    overlay.classList.toggle('hidden');
    mobile_menu.classList.toggle('hidden');
    close_btn.classList.toggle('hidden');
    body.classList.remove('noscroll');
});


// BOOMARKED

bookmark.addEventListener('click', () => {
    if (bookmark.classList.contains('bookmarked')) {
         bookmark.classList.toggle('bookmarked');
         bookmark_text.textContent = 'Bookmark';
        } else {
            bookmark.classList.toggle('bookmarked');
            bookmark_text.textContent = 'Bookmarked';
            
    }
   
});

back_btn.addEventListener('click', () => {
    modal.classList.toggle('active');
    overlay.classList.toggle('hidden');
})

close_modal.addEventListener('click', () => {
    modal.classList.toggle('active');
    overlay.classList.toggle('hidden');
    reset();
});



// Pledge Reveal





function displayPlege(select) {
    const modal_items = select.parentElement.parentElement;
    const options = modal_items.childNodes[5];
    const hr_line = modal_items.childNodes[3];


    if (!select.checked) {
        modal_items.classList.toggle('select');
        options.classList.toggle('select');
        hr_line.classList.toggle('select');
        select.checked = false;
    }else  {
        modal_items.classList.toggle('select');
        options.classList.toggle('select');
        hr_line.classList.toggle('select');
        select.checked = true;
    }
    
    // console.log();

   
};

radio.forEach(select  => {
    select.addEventListener('change', () => {
        displayPlege(select);
    });
});

// select Reward


buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        modal.classList.toggle('active');
        overlay.classList.toggle('hidden');
        if (btn.id === 'first-reward') {
            document.getElementById('first-pledge').click()
            document.getElementById('item1').scrollIntoView({ behavior: 'smooth' });
        } else if (btn.id === 'second-reward') {
            document.getElementById('second-pledge').click();
            document.getElementById('item2').scrollIntoView({ behavior: 'smooth' });
            
        }
        
    })
});



// form validations
continue_btn.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const completed = document.querySelector('.completed')
        if (btn.id === 'submit1') {
            // console.log('hello');
            if (input[1].value <= input[1].id) {
                input[1].classList.add('select');
                heading[0].classList.add('show-animation');
                input[1].value = '';
                input[1].focus();
                // console.log('wrong-input');
            } else {
                input[1].classList.remove('select');
                completed.classList.add('active');
                modal.classList.toggle('active');
            
            }
        }
        if (btn.id === 'submit2') {
            if (input[2].value <= input[2].id) {
            input[2].classList.add('select');
            heading[1].classList.add('show-animation');
            input[2].value = '';
            input[2].focus();
        } else {
            input[1].classList.remove('select');
                completed.classList.add('active');
            modal.classList.toggle('active');
        }
        }
        
    });
});


cta_completed.addEventListener('click', () => {
    reset();
    overlay.classList.toggle('hidden');
    pop_up_completed.classList.toggle('active');

})