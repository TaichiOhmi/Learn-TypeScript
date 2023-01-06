var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var a = "1";
console.log('add', a);
// constだとhelloのtypeは'world'になる。
// const hello = 'world';
// hello = 'foo';
// letだとhelloのtypeはstringになる。
var hello = 'world';
hello = 'foo';
// このようにtypeを割り当てられる。割り当てたtype以外は変数に入れられない。
// let hello: string = 'world';
var getFullName = function (name, surname) {
    return name + ' ' + surname;
};
// console.log(getFullName(true, ['foo']))
console.log(getFullName('山本', '博'));
var user = {
    name: 'Monster',
    age: 30
};
var user3 = {
    name: '山本博',
    // age: 40,
    getMessage: function () {
        return "Hello " + this.name;
    }
};
var user4 = {
    name: '山本博',
    age: 40,
    getMessage: function () {
        return "Hello " + name;
    }
};
console.log(user3.age);
console.log(user3.getMessage);
var popularTags = ['dragon', 'coffee'];
var dragonsTag = 'dragon';
var username = 'alex';
// union型
var pageName = "1";
var errorMessage = null;
var user5 = null;
var someProp;
var doSomething = function () {
    console.log('doSomething');
};
// (型としての)キーワード「never」(または「never 型」)は『値が全く現れることのない型』を示します。
// 「値が全く現れることのない」とは、ある関数の内部処理が無限ループ構造になるなどで「return」されない場合(＝undefined 含め戻り値が返ることが無い)、あるいは、ある変数の型ガード処理の結果、(静的解析上)そのガード内に入ることがあり得ない場合、などが含まれます。
// なお、関数(アロー関数も含む)の戻り値が明示的に「never」とされている場合、その関数内で(便宜上の「never 値」を除いて)あらゆる値をreturnすること、および関数の末尾に処理が到達する状態になっていることはエラーと扱われます。
var doNever = function () {
    console.log('never');
    throw 'never';
};
var foo = null;
var bar = undefined;
// errorが出ない
// Any is not a solution but start of bigger problems
// let cool: any = 'cool';
// console.log(cool.c())
var vAny = 10;
var vUnknown = 10;
// こっちはok
var s1 = vAny;
// console.log(vAny.foo());
// こっちは無理
// let s2: string = vUnknown;
// console.log(vUnknown.foo());
var s3 = vUnknown;
var pageNumber = "1";
// 以下2つはエラー
// let numbericPageNumber: number = pageNumber;
// let numbericPageNumber: number = pageNumber as number;
// 一度unknownに型アサーションすると、、いける！
var numbericPageNumber = pageNumber;
var hage = '1';
var hageNumber = hage;
// as ~ をつけないと、Elementとして認識されるので、valueを出力しようとするとerrorになる。それは、型assertionで防げる。
var someElement = document.querySelector('.foo');
// console.log("someElement", someElement.value)
var aElement = document.querySelector('.bar');
var User = /** @class */ (function () {
    function User(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.unchangableName = firstName;
    }
    User.prototype.changeUnchangableName = function () {
        // this.unchangableName = 'foo';
    };
    User.prototype.getFullname = function () {
        return this.firstName + ' ' + this.lastName;
    };
    // static プロパティ/メソッドは、インスタンスを作らずとも使える。
    // 逆に、staticプロパティは、インスタンスからアクセスできないので、コンストラクタや、static以外のメソッドから、アクセスできない。
    User.maxAge = 50;
    return User;
}());
var userInstance = new User('Monster', "lessons");
console.log(userInstance.getFullname());
console.log(userInstance);
console.log(User.maxAge);
// Userを継承するから、この時点でUserのpropertyやmethodを持っている。
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Admin.prototype.setEditor = function (editor) {
        this.editor = editor;
    };
    Admin.prototype.getEditor = function () {
        return this.editor;
    };
    return Admin;
}(User));
var admin = new Admin('foo', 'bar');
admin.setEditor('fb');
console.log(admin.getEditor());
// 「型も変数のように扱えるようにする」というのがジェネリクスの発想！！
// All generic data types are written inside "<>"
// const addId = <T extends object>(obj: T) => {
var addId = function (obj) {
    var id = Math.random().toString(16);
    return __assign(__assign({}, obj), { id: id });
};
var user6 = {
    name: 'Jack'
};
var result = addId(user6);
console.log('result', result);
var user7 = {
    name: 'Guest',
    data: {
        meta: 'foo'
    }
};
var user8 = {
    name: 'niko',
    data: ['foo', 'bar', 'baz']
};
var result2 = addId(user7);
console.log('result2', result);
var result3 = addId('foo');
console.log("result3", result3);
var user9 = {
    name: 'u9',
    data: {
        meta: 'foo'
    },
    meta: 'bar'
};
// const updatedArray = append<string>('baz', ['foo', 'bar']);
// const searchStr = 'foo';
// const hasSearchedString = any<string>((el: string) => el.includes(searchStr), ['fooooo', 'bar', 'baz']);
// const statuses = {
//     notStarted: 0,
//     inProgress: 1,
//     done: 2
// }
// console.log(statuses.inProgress);
var Status;
(function (Status) {
    Status[Status["NotStarted"] = 0] = "NotStarted";
    Status[Status["InProgress"] = 1] = "InProgress";
    Status[Status["Done"] = 2] = "Done";
})(Status || (Status = {}));
var notStartedStatus = Status.NotStarted;
console.log("notStartedStatus", notStartedStatus);
notStartedStatus = Status.Done;
console.log("notStartedStatus", notStartedStatus);
console.log('Status', Status);
console.log('Status', Status.InProgress);
