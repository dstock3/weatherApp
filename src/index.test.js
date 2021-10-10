/**
 * @jest-environment jsdom
 */

//reset css needs to be disabled for these tests to function

import { process } from './index'
import { mockData } from './mockData'

const processedData = process(mockData)
let forecast = processedData.forecastArray;
let alerts = processedData.alertArray;

console.log(forecast)

test('process returns an object', () => {
    expect(typeof processedData).toBe('object');
});

test('process function returns an object containing a forecast array property', () => {
    expect(forecast).not.toBeNull();
});

test('process function returns an object containing a alert array property', () => {
    expect(alerts).not.toBeNull();
});

test('forecast array has the appropriate length', () => {
    expect(forecast.length).toBe(8);
});

test ('alert array is undefined in the case of no weather alerts', () => {
    expect(alerts).toBe(undefined);
});

test("forecast array objects have valid properties", () => {
    for (let i = 0; i < forecast.length; i++) {
        expect(forecast[i].date).not.toBeNull();
        expect(typeof forecast[i].temp).toBe('number');
        expect(typeof forecast[i].high).toBe('number');
        expect(typeof forecast[i].low).toBe('number');
        expect(forecast[i].info).not.toBeNull();
    };
});

test("forecast array temp values are appropriately assigned", () => {
    for (let i = 0; i < forecast.length; i++) {
        let temp = forecast[i].temp;
        let high = forecast[i].high;
        let low = forecast[i].low;

        expect(high).toBeGreaterThan(low);
        expect(temp).toBeGreaterThan(low);
        expect(temp).toBeGreaterThan(low);
        expect(temp).toBeLessThan(high);
    };
});