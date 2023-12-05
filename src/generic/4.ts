/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

interface ComponentInt {
  title:string
}

class Component  <T extends ComponentInt> {
  constructor (public props:T) {

  }
}

class Page extends Component <ComponentInt> {
  pageInfo () {
    console.log(this.props.title);
  }
}

export {};