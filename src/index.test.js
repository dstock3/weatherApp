/**
 * @jest-environment jsdom
 */

import { process } from './index'
import { mockData } from './mockData'

const processedData = process(mockData)

test('process returns an object', () => {
    expect(typeof processedData).toBe('object');
});

test('process function returns an object containing a forecast array property', () => {
    expect(processedData.forecastArray).not.toBeNull();
});

test('process function returns an object containing a alert array property', () => {
    expect(processedData.alertArray).not.toBeNull();
});