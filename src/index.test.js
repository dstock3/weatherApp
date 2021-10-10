import { process } from './index'
import { mockData } from './mockData'

test('process function returns a forecast array with the appropriate length', () => {
    let processedData = process(mockData)
    expect(processedData.forecastArray.length).toBe(8);
});