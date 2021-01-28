import get from "lodash/get";

class ModelAbstract {
  constructor(arrFieldNames, objFields) {
    this._mapFields = new Map();

    const intFieldLength = arrFieldNames.length;

    for (let i = 0; i < intFieldLength; i += 1) {
      try {
        const strFieldName = arrFieldNames[i];
        if (!strFieldName) {
          throw new Error(`Failed to find field name ${strFieldName}.`);
        }
        const bHasFieldValue = Object.prototype.hasOwnProperty.call(
          objFields,
          strFieldName
        );
        this._mapFields.set(
          strFieldName,
          bHasFieldValue ? get(objFields, strFieldName) : undefined
        );
      } catch (strErrorMessage) {
        console.log("ModelAbstract", strErrorMessage);
      }
    }
  }

  getFieldOrFail(strFieldName) {
    if (!this._mapFields.has(strFieldName)) {
      throw new Error(`Failed to find field ${strFieldName}.`);
    }

    return this._mapFields.get(strFieldName);
  }

  getField(strFieldName, defaultMixedValue = undefined) {
    try {
      const mixedValue = this.getFieldOrFail(strFieldName);
      return !mixedValue ? defaultMixedValue : mixedValue;
    } catch (error) {
      return defaultMixedValue;
    }
  }
}

export default ModelAbstract;
