cc.Class({
    extends: cc.Component,

    properties: {
        label: {
            default: null,
            type: cc.Label
        },
        performance_btn: {
            default: null,
            type: cc.Button
        },
        string_plus_btn: {
            default: null,
            type: cc.Button
        },
        string_arr_btn: {
            default: null,
            type: cc.Button
        },
        string_buffer_btn: {
            default: null,
            type: cc.Button
        },
        load_512_btn: {
            default: null,
            type: cc.Button
        },
        load_430_btn: {
            default: null,
            type: cc.Button
        },
        load_300_btn: {
            default: null,
            type: cc.Button
        },
        load_256_btn: {
            default: null,
            type: cc.Button
        },
        load_180_btn: {
            default: null,
            type: cc.Button
        },
        image_node: {
            default: null,
            type: cc.Sprite
        },

        // defaults, set visually when attaching this script to the Canvas
        text: 'Hello, World!'
    },

    // use this for initialization
    onLoad: function () {
        console.log('hello load')
        this.label.string = this.text;
        this.performance_btn.node.on('click',this.performanceTest,this);

        this.string_plus_btn.node.on('click',this.plus_to_concat,this);
        this.string_arr_btn.node.on('click',this.array_to_concat,this);
        this.string_buffer_btn.node.on('click',this.sb_to_concat,this);
        this.load_512_btn.node.on('click',this.load_512,this);
        this.load_430_btn.node.on('click',this.load_430,this);
        this.load_300_btn.node.on('click',this.load_300,this);
        this.load_256_btn.node.on('click',this.load_256,this);
        this.load_180_btn.node.on('click',this.load_180,this);
    },

    performanceTest: function (button) {
        console.log('performanceTest')
        let count = this.cost_many_time();
        console.log('count = ',count);

    },

    cost_many_time: function () {
        console.log('start cost_many_time')
        let total = 0;
    
        for (let i = 0; i < 99999; i++) {
            total += Math.sqrt(i) * Math.sin(i);
        }
        return total;
    },

    plus_to_concat: function() {
        console.log('plus_to_concat Before:', performance.memory.usedJSHeapSize);
        let teststr = '';
        for (let i = 0; i < 999999; i++) {
            teststr += "some text" + i.toString();
        }
        console.log('plus_to_concat After:', performance.memory.usedJSHeapSize);
    },

    array_to_concat: function() {
        console.log('array_to_concat Before:', performance.memory.usedJSHeapSize);
        let str_arr = []
        for (let i = 0; i < 999999; i++) {
            str_arr.push("some text")
            str_arr.push(i.toString());
        }
        const result = str_arr.join('');
        console.log('array_to_concat After:', performance.memory.usedJSHeapSize);
    },

    sb_to_concat: function() {
        console.log('sb_to_concat Before:', performance.memory.usedJSHeapSize);
        const stringBuilder = [];
        for (let i = 0; i < 999999; i++) {
            stringBuilder.push("some text")
            stringBuilder.push(i.toString());
        }
        const result = stringBuilder.join('');
        console.log('sb_to_concat After:', performance.memory.usedJSHeapSize);
    },

    load_512: function() {
        cc.resources.load('test512', cc.SpriteFrame, (err, asset) => {
            this.image_node.spriteFrame = asset;
          });
    },

    load_430: function() {
        cc.resources.load('test430', cc.SpriteFrame, (err, asset) => {
            this.image_node.spriteFrame = asset;
          });
    },
    load_300: function() {
        cc.resources.load('test300', cc.SpriteFrame, (err, asset) => {
            this.image_node.spriteFrame = asset;
          });
    },
    load_256: function() {
        cc.resources.load('test256', cc.SpriteFrame, (err, asset) => {
            this.image_node.spriteFrame = asset;
          });
    },
    load_180: function() {
        cc.resources.load('test180', cc.SpriteFrame, (err, asset) => {
            this.image_node.spriteFrame = asset;
          });
    },

    // called every frame
    update: function (dt) {

    },
});
