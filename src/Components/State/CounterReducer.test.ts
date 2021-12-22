import CounterReducer, {
    addValueAC,
    changeValueAC,
    resetValueAC,
    setMaxValueAC,
    setMinValueAC,
    ValueType
} from "./CounterReducer";

test('correct add value', () => {

    const startValue: ValueType = {
        value: 0,
        minValue: 0,
        maxValue: 0
    }

    const endValue = CounterReducer(startValue, addValueAC(3, 7))

    expect(endValue.minValue).toBe(3)
    expect(endValue.maxValue).toBe(7)
})

test('correct change value', () => {

    const startValue: ValueType = {
        value: 3,
        minValue: 3,
        maxValue: 7
    }

    const endValue = CounterReducer(startValue, changeValueAC(5))

    expect(endValue.minValue).toBe(3)
    expect(endValue.maxValue).toBe(7)
    expect(endValue.value).toBe(5)
})

test('correct reset value', () => {

    const startValue: ValueType = {
        value: 3,
        minValue: 3,
        maxValue: 7
    }

    const endValue = CounterReducer(startValue, resetValueAC())

    expect(endValue.minValue).toBe(0)
    expect(endValue.maxValue).toBe(0)
    expect(endValue.value).toBe(0)
})

test('correct set MAX value', () => {

    const startValue: ValueType = {
        value: 3,
        minValue: 3,
        maxValue: 7
    }

    const endValue = CounterReducer(startValue, setMaxValueAC(12))

    expect(endValue.minValue).toBe(3)
    expect(endValue.maxValue).toBe(12)
    expect(endValue.value).toBe(3)
})

test('correct set MIN value', () => {

    const startValue: ValueType = {
        value: 3,
        minValue: 3,
        maxValue: 7
    }

    const endValue = CounterReducer(startValue, setMinValueAC(5))

    expect(endValue.minValue).toBe(5)
    expect(endValue.maxValue).toBe(7)
    expect(endValue.value).toBe(3)
})