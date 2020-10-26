import React, { Component } from 'react';

import {Map,List,Seq,fromJS,Set,Range} from 'immutable';



class index extends Component {
    state = {  }
    render() {

        //toJS()方法可以将immutable数据对象转化成js数据格式


        //Map用来设置对象，生成Map对象的两种写法Map({}) Map(obj)
        //通过set方法来修改数据，通过get方法来获得数据
        const map11=Map({
            a:1,
            b:2
        })
        const map12=map11.set('a',10);
        console.log(map11.toJS());
        console.log(map12.toJS());
        console.log(map12.get('b'));


        //在比较map对象的时候，obj1.equals(obj2)比较的是obj1和obj2的实际值得比较，而不是比较的地址
        const obj={
            a:21,
            b:22
        }
        const map21=Map(obj);
        const map22=Map(obj);
        console.log(map21===map22);//false
        console.log(map21.equals(map22));//true
        console.log(Object.is(map21,map22));


        //map对象中 .map方法接收回调函数作为参数，回调函数中，有v和k两个参数，v是值，key是键，在map方法中的返回值会返回到对象中的value中，然后通过 .join()方法回将所有的value值链接成字符串
        const map221=Map({
            a:1,
            b:2,
            c:3
        })
        const map222=map221.map((v,k)=>{
            console.log(k);
            return k.toUpperCase()
        }).join()
        console.log(map222);
        const map223=map221.map((v,k)=>{
            // console.log(k);
            return k.toUpperCase()
        })
        console.log(map223.toJS());



        //通过List方法来生成List数组，数组的几乎所有方法都可以list数组中使用
        const list31=List([1,2,3,4,5,6]);
        const list32=list31.push(7);
        const list33=list31.unshift(8);
        const list34=list32.unshift(8)
        console.log(list32.toJS());
        console.log(list33.toJS());
        console.log(list34.toJS());
        console.log(list32.concat(list33).toJS());



        //对象数组合并
        //对象合并
        let map41 = Map({a: 100, b: 200, c: 300, x: {aa: 1000, bb: 2000}})
        let map42 = Map({b: 400, c: 500, d: 600, x: {aa: 3000, cc: 4000}})
        let map43 = {y: 999}
        const map44=map41.merge(map42);
        const map45=map41.mergeDeep(map42,map43);
        console.log(map44.toJS());
        console.log(map45.toJS());
        //数组合并
        const list41=List([1,2,3,4]);
        const list42=List(['a','b','c','d']);
        const list43=List(['c','d']);
        console.log(list41.concat(list42,list43).toJS());
        


        // Seq既能处理对象数据又能处理数组数据，但是是惰性的只有要用到的时候才会被调用
        const obj1={
            a:1,
            b:2
        }
        const map51=Seq(obj1);
        console.log(map51.toJS());
        const map52=map51.map((v,k)=>{
            console.log(k);
            return v*2
        })
        console.log(map52.toJS());
        const list5=[1,2,3];
        const list51=Seq(list5);
        console.log(list51.toJS());


        //formJs完全将一个js对象或者数组转化成不可变的map对象或者list数组
        const obj6={a:1,b:2,c:3};
        console.log(Object.keys(obj6));
        console.log(obj6['a'],obj6[1]);
        const map61=fromJS(obj6);
        console.log(map61.toJS());

        const deep=Map({
            a:10,
            b:20,
            c:List([1,2,3,4])
        });
        console.log(deep.toJS());//一次性全部遍历出来
        console.log(deep.toObject());//只能遍历一层
        console.log(deep.toArray());//相当于原生的Oject.entries()
        console.log(JSON.stringify(deep));//转化成json字符串


        //展开运算符不能展开Map对象，但是可以展开List数组
        const map71=Map({
            a:1,
            b:2
        })
        const map72={...map71,c:3}
        console.log(map72);
        const list71=List([1,2,3])
        const list72=[...list71,4];
        console.log(list72);


        //get getIn set setIn
        const map81 = Map({
        a: 2,
        b: List([3, 4, 5, 6]),
        c: [7, Map({
            d: 6
        })]
        })
        console.log(map81.get('c')[1].get('d'));
        console.log(map81.getIn(['c',1,'d']));
        const map82=map81.setIn(['c',1,'b'],220);
        console.log(map82.toJS());
        const map83=map81.updateIn(['c',1,'b'],(v)=>{
            console.log(v);//undefine
            return 2000
        })
        console.log(JSON.stringify(map83));


        const set11=Set(['a','b','b','b','c']);
        console.log(set11.toJS());
        const map91 = Map({ a: 1, b: 2, c: 3 });
        const map92 = Map({ a: 1, b: 2, c: 3 });
        const set12=Set().add(map91);
        console.log(set12.toJS());
        console.log(set12.has(map92));//这个地方比较的是内部的值是否相等，相等就代表有，就是true

        


        

    const oddSquares = Seq([ 1, 2, 3, 4, 5, 6, 7, 8 ])
      .filter(x => {
        console.log(x)
        return x % 2 !== 0
      })
      .map(x => {
        console.log(x)
        return x * x
      });

    console.log(oddSquares.get(1))
    console.log(oddSquares.get(3))



    const aRange = Range(1, Infinity)
      .skip(1000)
      .map(n => -n)
      .filter(n => n % 2 === 0)
      .take(2)
      .reduce((r, n) => r * n, 1);
      
    console.log(aRange)




        return (
            <>
                <h3>immutable</h3>
            </>
        );
    }
}

export default index;