/**
 * @jest-environment jsdom
 */

import { process } from './index'
import { mockData } from './mockData'

test('use jsdom in this test file', () => {
    const element = document.createElement('div');
    expect(element).not.toBeNull();
});

test('process returns an object', () => {
    let processedData = process(mockData)
    expect(typeof processedData).toBe('object');
});

test('process function returns a forecast array with the appropriate length', () => {
    let processedData = process(mockData)
    expect(processedData.forecastArray.length).toBe(8);
});