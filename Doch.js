import Task from './Rod.js';

export default class SubTask extends Task {
	
  #subtext;

  constructor(number, text, vipolnen, sub='') {
    super(number, text, vipolnen);
    this.#subtext = sub;
  }

  get subtext() { return this.#subtext; }
  set subtext(value) { this.#subtext = value; }

  show() {
    super.show();
    console.log(this.#subtext);
  }

  delete() {
    super.delete();
    this.#subtext = undefined;
  }

  copy() {
    return new SubTask(this.nomer, this.text, this.status, this.#subtext);
  }

  static clone(instance) {
    return new SubTask(instance.nomer, instance.text, instance.status, instance.subtext);
  }
}
