/*
  Wat doe je ook alweer in Javascript voor een micro-interactie?
  1. Gebruik de querySelector om een element in je html te selecteren
  2. Koppel een evenListener aan het element om een mouse-event te detecteren
  3. Gebruik het Classlist object om een css class aan een element toe te voegen of weg te halen.
*/

const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

// Fill Listeners
fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

// Loop Through Empties and call drag events
for (const empty of empties) {
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragover', dragEnter);
    empty.addEventListener('dragover', dragLeave);
    empty.addEventListener('drop', dragDrop);
}

// Drag Functions
function dragStart() {
    this.className += ' hold';
    setTimeout(() => (this.className = 'invisible'), 0);
    console.log("dragStart")
}

function dragEnd() {
    this.className = 'fill';
    console.log("dragEnd")
}

function dragOver(e) {
    e.preventDefault();
    console.log("dragOver",e)
    document.querySelector(e.target).classList.add("enter")
}

function dragEnter(e) {
    e.preventDefault();
    this.className += 'hovered';
    console.log("dragEnter",e.target)

}

function dragLeave() {
    this.className = 'empty';
    console.log("dragLeave",this)
    e.target.classList.remove("enter")
}

function dragDrop() {
    this.className = 'empty';
    this.append(fill);
    console.log("dragDrop")
}
