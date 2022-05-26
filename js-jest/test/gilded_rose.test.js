const {Shop, Item} = require("../src/gilded_rose");



describe("General Item", function(){

  it("should return item with name, quality and sellin value given the sellIn > 0", function() {
    const gildedRose = new Shop([new Item("test", 10, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("test");
    expect(items[0].quality).toBe(9);
    expect(items[0].sellIn).toBe(9);
  });

  it("should degrade quality twice given the sellIn < 0", function() {
    const gildedRose = new Shop([new Item("test", -1, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(-2);
    expect(items[0].quality).toBe(8);
  });

  it("should never return negative quality", function() {
    const gildedRose = new Shop([new Item("test", -10, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(-11);
    expect(items[0].quality).toBe(0);
  });

});

describe("Aged Brie Item", function(){
  const item = 'Aged Brie'

  it("should increase quality by one given the sellIn > 0", function(){
    const gildedRose = new Shop([new Item(item, 10, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(9);
    expect(items[0].quality).toBe(11); 
  });

  it("should increase quality by two given the sellIn < 0", function(){
    const gildedRose = new Shop([new Item(item, -1, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(-2);
    expect(items[0].quality).toBe(12); 
  });


  it("should never increase quality above 50", function() {
    const gildedRose = new Shop([new Item(item, 10, 50)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(9);
    expect(items[0].quality).toBe(50);
  });
});

describe ("Sulfras Item",function(){
  it("should never decrease quality or SellIn", function() {
    const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", 10, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(10);
    expect(items[0].quality).toBe(10);
  });
});

describe("Backstage passes Item", function() {

  const item = 'Backstage passes to a TAFKAL80ETC concert'
  
  it("should increase quality by one given the sellIn > 10 ", function(){
    const gildedRose = new Shop([new Item(item, 12, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(11);
    expect(items[0].quality).toBe(11); 
  });
  
  it("should increase quality by two given the sellIn <= 10 and sellIn > 5", function(){
    const gildedRose = new Shop([new Item(item, 7, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(6);
    expect(items[0].quality).toBe(12); 
  });

  it("should increase quality by three given the sellIn <= 5", function(){
    const gildedRose = new Shop([new Item(item, 5, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(4);
    expect(items[0].quality).toBe(13); 
  });

  it("should increase quality by three given the sellIn <= 0", function(){
    const gildedRose = new Shop([new Item(item, -1, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(-2);
    expect(items[0].quality).toBe(0); 
  });

  it("should increase quality by one given the sellIn = 11 ", function(){
    const gildedRose = new Shop([new Item(item, 11, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(10);
    expect(items[0].quality).toBe(11); 
  });
});

