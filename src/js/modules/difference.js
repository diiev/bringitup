export default class Difference {
    constructor (oldOfficer, newOfficer, items) {
        this.oldOfficer = document.querySelector(oldOfficer);
        this.newOfficer = document.querySelector(newOfficer);
        try {
            this.oldItems =   this.oldOfficer.querySelectorAll(items);
            this.newItems =   this.newOfficer.querySelectorAll(items);
        } 
        catch (e) {}
       
        this.oldCounter = 0;
        this.newCounter = 0;
    }

    bindTriggers (trigger, officer, counter) {
        trigger.querySelector('.plus').addEventListener('click',()=> {
                if (counter !== officer.length - 2) { 
                    officer[counter].style.display = 'flex';
                    officer[counter].classList.add('animated', 'fadeIn');
                       counter++;
                } 
                else {
                    officer[counter].style.display = 'flex';
                    officer[officer.length - 1].remove();
                }
        }); 
    }

    hideItems (officer) {
        officer.forEach((item, i,arr) => {
            if (i !== arr.length - 1) {
                item.style.display = 'none';
            }
        });
 
        
    }
    
    init () {
       
            try {
                this.hideItems(this.oldItems);
                this.hideItems(this.newItems);
                this.bindTriggers(this.oldOfficer,this.oldItems, this.oldCounter);
                this.bindTriggers(this.newOfficer,this.newItems, this.newCounter);
            }
            catch (e) {}

    }
}