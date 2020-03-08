class UserStore {
  constructor(){
   if(! UserStore.instance){
     this._data = [];
     UserStore.instance = this;
   }

   return UserStore.instance;
  }						

  add(item){
    this._data.push(item);
  }

  get(id){
    return this._data.find(d => d.id === id);
  }
}

const instance = new UserStore();
const instance2 = new UserStore();


Object.freeze(instance);
Object.freeze(instance2);


instance.add('hola')
instance.add('como')
instance.add('estas')

instance2.add('hola')
instance2.add('como')
instance2.add('estas')




console.log(instance)
console.log(instance2)

//https://www.sitepoint.com/javascript-design-patterns-singleton/