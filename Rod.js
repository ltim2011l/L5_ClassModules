export default class Task {
  #nomer: number;
  #text: string;
  #status: boolean;

  constructor(nomer=1, text="", vipolnen=false) {
    this.#nomer = nomer;
    this.#text = text;
    this.#status = vipolnen;
  }

  get nomer() { return this.#nomer; }
  set nomer(value) { this.#nomer = value; }

  get text() { return this.#text; }
  set text(value) { this.#text = value; }

  get status() { return this.#status; }
  set status(value) { this.#status = value; }

  show() {
    console.log("${this.#nomer} 
    ${this.#text} 
    ${this.#status} ");
  }

  delete() {
    for (let key of Object.keys(this)) {
      this[key] = undefined;
    }
  }

  copy() {
    return this;
  }

  #Imortant() {
    this.#nomer = '*'+this.#nomer;
  }

  static clone(instance) {
    return new Task(instance.nomer, instance.text, instance.status);
  }
}
