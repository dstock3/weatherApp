/**
 * @jest-environment jsdom
 */

//reset css needs to be disabled for these tests to function

import { process } from './index'
import { mockData } from './mockData'

const processedData = process(mockData)
let forecast = processedData.forecastArray;
let alerts = processedData.alertArray;

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