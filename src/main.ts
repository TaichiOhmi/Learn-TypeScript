const a = "1";
console.log('add', a)

// constだとhelloのtypeは'world'になる。
// const hello = 'world';
// hello = 'foo';

// letだとhelloのtypeはstringになる。
let hello = 'world';
hello = 'foo';

// このようにtypeを割り当てられる。割り当てたtype以外は変数に入れられない。
// let hello: string = 'world';


const getFullName = (name: string, surname: string): string => {
    return name + ' ' + surname;
}

// console.log(getFullName(true, ['foo']))
console.log(getFullName('山本', '博'))

const user: {name: string, age: number} = {
    name: 'Monster',
    age: 30,
}

// const user2: {name: string, age: number} = {
//     name: 'Jack',
//     ageがないと教えてくれる。
// }

// interfaceで先に定義しておくことができる。
// interface名はCapitalizedで。
// propertyの後に?をつければ、そのpropertyがなくてもエラーにならない！
interface UserInterface {
    name: string,
    age?: number,
    getMessage(): string,
}

const user3: UserInterface = {
    name: '山本博',
    // age: 40,
    getMessage() {
        return "Hello " + this.name;
    },
};

const user4: UserInterface = {
    name: '山本博',
    age: 40,
    getMessage() {
        return "Hello " + name;
    },
}

console.log(user3.age)
console.log(user3.getMessage)



type ID = string;
type PopularTag = string;
type MaybePopularTag = PopularTag | null;

interface lazyUserInterface {
    id: ID,
    name: string,
    surname: string,
}

const popularTags: PopularTag[] = ['dragon', 'coffee']

const dragonsTag: MaybePopularTag = 'dragon';

let username: string = 'alex';
// union型
let pageName: string | number = "1";

let errorMessage: string | null = null;

let user5: lazyUserInterface | null = null;

let someProp: string | number | null | undefined | string[] | object;


const doSomething = (): void => {
    console.log('doSomething');
};

// (型としての)キーワード「never」(または「never 型」)は『値が全く現れることのない型』を示します。
// 「値が全く現れることのない」とは、ある関数の内部処理が無限ループ構造になるなどで「return」されない場合(＝undefined 含め戻り値が返ることが無い)、あるいは、ある変数の型ガード処理の結果、(静的解析上)そのガード内に入ることがあり得ない場合、などが含まれます。
// なお、関数(アロー関数も含む)の戻り値が明示的に「never」とされている場合、その関数内で(便宜上の「never 値」を除いて)あらゆる値をreturnすること、および関数の末尾に処理が到達する状態になっていることはエラーと扱われます。
const doNever = (): never => {
    console.log('never');
    throw 'never';
}

let foo: void = null;
let bar: void = undefined;

// errorが出ない
// Any is not a solution but start of bigger problems
let cool: any = 'cool';
console.log(cool.c())


let vAny: any = 10;
let vUnknown: unknown = 10;

// こっちはok
let s1: string = vAny;
console.log(vAny.foo());
// こっちは無理
// let s2: string = vUnknown;
// console.log(vUnknown.foo());

let s3: string = vUnknown as string;

let pageNumber: string = "1";

// 以下2つはエラー
// let numbericPageNumber: number = pageNumber;
// let numbericPageNumber: number = pageNumber as number;

// 一度unknownに型アサーションすると、、いける！
let numbericPageNumber: number = (pageNumber as unknown) as number;


let hage: any = '1';
let hageNumber = hage as string;


// as ~ をつけないと、Elementとして認識されるので、valueを出力しようとするとerrorになる。それは、型assertionで防げる。
const someElement = document.querySelector('.foo') as HTMLInputElement;
console.log("someElement", someElement.value)

const aElement = document.querySelector('.bar');
aElement.addEventListener('blur', (event) => {
    const target = event.target as HTMLInputElement;
    console.log('event', target.value)
});

interface UInterface {
    getFullname(): string;
}

class User implements UInterface{
    firstName: string
    lastName: string
    // protected firstName: string
    // private lastName: string

    readonly unchangableName: string

    // static プロパティ/メソッドは、インスタンスを作らずとも使える。
    // 逆に、staticプロパティは、インスタンスからアクセスできないので、コンストラクタや、static以外のメソッドから、アクセスできない。

    static maxAge = 50

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.unchangableName = firstName;
    }

    changeUnchangableName(): void {
        // this.unchangableName = 'foo';
    }

    getFullname(): string { 
        return this.firstName + ' ' + this.lastName
    }
}

const userInstance = new User('Monster', "lessons");
console.log(userInstance.getFullname())
console.log(userInstance)
console.log(User.maxAge)


// Userを継承するから、この時点でUserのpropertyやmethodを持っている。
class Admin extends User {
    private editor: string

    setEditor(editor: string): void {
        this.editor = editor;
    }

    getEditor(): string{
        return this.editor
    }
}
const admin = new Admin('foo', 'bar')
admin.setEditor('fb')
console.log(admin.getEditor())