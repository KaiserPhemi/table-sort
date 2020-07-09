// react libraries
import React, { useState } from "react";

import Checkbox from "antd/es/checkbox";

import "./RowItem.scss";

const CheckboxGroup = Checkbox.Group;

const rows = [
  {
    id: 1,
    name: "bar",
  },
  {
    id: 2,
    name: "femi",
  },
  {
    id: 3,
    name: "koko",
  },
  {
    id: 4,
    name: "deal",
  },
  {
    id: 5,
    name: "mehn",
  },
  {
    id: 6,
    name: "foo",
  },
];

const namesArr = rows.map((name, index) => name.name);

/**
 * @desc
 */
const RowItem = () => {
  const [isChecked, setCheckStatus] = useState<boolean>(false);
  const [checkedList, setCheckedList] = useState<any>(namesArr);
  const [checkAll, setCheckAll] = useState<boolean>(true);
  const [indeterminate, setIndeterminate] = useState<boolean>(true);

  /**
   * @desc handles changes in items selection
   * @param evt
   */
  const handleChange = (checkedItems: any) => {
    const isIndeterminate =
      !!checkedItems.length && checkedItems.length < namesArr.length;
    setCheckedList(checkedItems);
    setIndeterminate(isIndeterminate);
    setCheckAll(checkedList.length === namesArr.length);
  };

  /**
   * @desc handles selection of all items
   * @param evt
   */
  const onCheckAllChange = (evt: any) => {
    const selectedItems = evt.target.checked ? namesArr : [];
    setCheckedList(selectedItems);
    setCheckAll(evt.target.checked);
    setIndeterminate(false);
  };

  console.log("The List", checkedList);
  return (
    <div>
      <Checkbox
        indeterminate={indeterminate}
        checked={checkAll}
        onChange={onCheckAllChange}
      >
        Select All
      </Checkbox>
      <CheckboxGroup
        className="list-group"
        options={namesArr}
        value={checkedList}
        onChange={handleChange}
      />
    </div>
  );
};

export default RowItem;
