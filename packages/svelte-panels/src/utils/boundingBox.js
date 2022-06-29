/** @type {BoundingBox} */
const defaultBB = {
  left: 0,
  right: 0,
  bottom: 0,
  top: 0,
};

/**
 * Splits the bouding box into two, given the split-percentage, in the given direction
 * @param {BoundingBox} bb
 * @param {number} splitPercentage
 * @param {Direction} direction
 * @returns {[BoundingBox, BoundingBox]}
 */
function splitBoundingBox(bb, splitPercentage, direction) {
  /** @type {BoundingBox} */
  const firstBB = { ...bb };

  /** @type {BoundingBox} */
  const secondBB = { ...bb };

  if (direction == "row") {
    const availableWidth = 100 - bb.left - bb.right;
    const firstWidth = (availableWidth * splitPercentage) / 100;
    const secondWidth = (availableWidth * (100 - splitPercentage)) / 100;

    firstBB.right = bb.right + secondWidth;
    secondBB.left = bb.left + firstWidth;
  }

  if(direction == "column"){
    const availableHeight = 100-bb.top - bb.bottom;
    const firstHeight = (availableHeight * splitPercentage) / 100;
    const secondHeight = (availableHeight * (100 - splitPercentage)) / 100;

    firstBB.bottom = bb.bottom + secondHeight;
    secondBB.top = bb.top + firstHeight;
  }

  return [firstBB, secondBB];
}
export default splitBoundingBox;
