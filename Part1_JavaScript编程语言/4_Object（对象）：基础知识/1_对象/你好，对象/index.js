// 按下面的要求写代码，一条对应一行代码：

// 创建一个空的对象 user。
// 为这个对象增加一个属性，键是 name，值是 John。
// 再增加一个属性，键是 surname，值是 Smith。
// 把键为 name 的属性的值改成 Pete。
// 删除这个对象中键为 name 的属性。

let user = {
    name: 'John',
    surname: 'Smith'
};//字面量创建对象

user.name = 'Pete';
delete user.name;