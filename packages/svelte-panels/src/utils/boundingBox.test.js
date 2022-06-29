import splitBoundingBox from "./boundingBox";

describe("Bounding Box Utils", () => {
  it("splits full bounding box in row direction", () => {
    /**@type {BoundingBox} */
    const boundingBox = {
      left: 0,
      right: 0,
      top: 20,
      bottom: 20,
    };

    /**@type {[BoundingBox, BoundingBox]} */
    const expectedResult = [
      {
        left: 0,
        right: 60,
        top: 20,
        bottom: 20,
      },
      {
        left: 40,
        right: 0,
        top: 20,
        bottom: 20,
      },
    ];

    /**@type {[BoundingBox, BoundingBox]} */
    const result = splitBoundingBox(boundingBox, 40, "row");

    expect(result).toEqual(expectedResult);
  });

  it("splits half bounding box in row direction", () => {
    /**@type {BoundingBox} */
    const boundingBox = {
      left: 50,
      right: 0,
      top: 0,
      bottom: 0,
    };

    /**@type {[BoundingBox, BoundingBox]} */
    const expectedResult = [
      {
        left: 50,
        right: 30,
        top: 0,
        bottom: 0,
      },
      {
        left: 70,
        right: 0,
        top: 0,
        bottom: 0,
      },
    ];

    /**@type {[BoundingBox, BoundingBox]} */
    const result = splitBoundingBox(boundingBox, 40, "row");

    expect(result).toEqual(expectedResult);
  });

  it("splits full bounding box in column direction", () => {
    /**@type {BoundingBox} */
    const boundingBox = {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
    };

    /**@type {[BoundingBox, BoundingBox]} */
    const expectedResult = [
      {
        left: 0,
        right: 0,
        top: 0,
        bottom: 60,
      },
      {
        left: 0,
        right: 0,
        top: 40,
        bottom: 0,
      },
    ];

    /**@type {[BoundingBox, BoundingBox]} */
    const result = splitBoundingBox(boundingBox, 40, "column");

    expect(result).toEqual(expectedResult);
  });

  it("splits partial bounding box in column direction", () => {
    /**@type {BoundingBox} */
    const boundingBox = {
      left: 40.2134,
      right: 20.19346598731465,
      top: 40,
      bottom: 20,
    };

    /**@type {[BoundingBox, BoundingBox]} */
    const expectedResult = [
      {
        left: 40.2134,
        right: 20.19346598731465,
        top: 40,
        bottom: 44,
      },
      {
        left: 40.2134,
        right:  20.19346598731465,
        top: 56,
        bottom: 20,
      },
    ];

    /**@type {[BoundingBox, BoundingBox]} */
    const result = splitBoundingBox(boundingBox, 40, "column");

    expect(result).toEqual(expectedResult);
  });


});
