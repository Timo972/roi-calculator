<template>
    <div
        class="custom-select"
        :tabindex="tabindex"
        @blur="open = false"
        @click="open = !open"
    >
        <span :data-placeholder="title"></span>
        <div class="selected" :class="{ open }">
            {{ $t(selected) }}
            <span class="info" v-if="infos[options.indexOf(selected)] != null">
                {{ infos[options.indexOf(selected)] }}
            </span>
        </div>
        <div class="items" :class="{ selectHide: !open }">
            <div
                v-for="(option, i) of options"
                :key="i"
                :class="{ 'same-as-selected': option === selected }"
                @click="select(option)"
            >
                {{ $t(option) }}
                <span class="info" v-if="infos[i] != null">
                    {{ infos[i] }}
                </span>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
    props: {
        options: {
            type: Array,
            required: true,
        },
        default: {
            type: String,
            required: false,
            default: null,
        },
        tabindex: {
            type: Number,
            required: false,
            default: 0,
        },
        title: {
            type: String,
            required: true,
            default: 'SelectBox',
        },
        infos: {
            type: Array,
            required: false,
            default: () => [],
        },
    },
    setup(props, context) {
        const open = ref(false)
        const selected = props.default ? ref(props.default) : ref('')

        function select(opt: string) {
            if (selected == null) return
            selected.value = opt
            context.emit('input', opt)
        }

        return { open, selected, select }
    },
})
</script>

<style lang="scss" scoped>
.custom-select {
    position: relative;
    width: 223px;
    text-align: left;
    outline: none;
    height: 23px;
    line-height: 47px;
    padding: 5px 10px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 5px;
    margin: 20px 5px;
}

.custom-select .info {
    color: #adadad;
    margin-left: auto;
    margin-right: 10px;
}

.custom-select span::before {
    content: attr(data-placeholder);
    position: absolute;
    top: -5px;
    left: 5px;
    color: #f1f1f1;
    transform: translateY(-50%);
    z-index: 1;
    transition: 0.5s;
    font-size: 18px;
}

.custom-select .selected {
    border-radius: 6px;
    cursor: pointer;
    user-select: none;
    height: 23px;
    display: flex;
    justify-content: left;
    align-items: center;
    color: #bdc3c7;
    font-size: 18px;
    padding-left: 2px;
}

.custom-select .selected::before {
    content: '';
    position: absolute;
    width: 0%;
    height: 2px;
    //background: #58d68d;
    background: linear-gradient(to right, #00e795, #00c8a4);
    transition: 0.5s;
    bottom: 1px;
    left: 2px;
}

.custom-select .selected.open::before {
    width: 98.5%;
}

.custom-select .selected:after {
    position: absolute;
    content: '';
    top: 15px;
    right: 0.7em;
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-color: #fff transparent transparent transparent;
}

.custom-select .items {
    color: #fff;
    border-radius: 0px 0px 5px 5px;
    overflow: hidden;
    border-right: 1px solid #58d68d;
    border-left: 1px solid #58d68d;
    border-bottom: 1px solid #58d68d;
    position: absolute;
    background-color: #2f3741;
    left: 0;
    right: 0;
    z-index: 5;
    top: 32px;
    width: 98.5%;
    left: 1px;
    max-height: 300px;
    overflow-x: hidden;
    overflow-y: auto;
    &::-webkit-scrollbar {
        background: none;
        width: 3px;
    }
    &::-webkit-scrollbar-thumb {
        background-color: #58d68d;
        width: 3px;
        border-radius: 5px;
    }
}

.custom-select .items div {
    color: #fff;
    padding-left: 1em;
    cursor: pointer;
    user-select: none;
    z-index: 22;
    height: 30px;
    display: flex;
    align-items: center;
}

.custom-select .items div:hover {
    //background-color: #58d68d;
    background: linear-gradient(to right, #00e795, #00c8a4);
}

.selectHide {
    display: none;
}
</style>
