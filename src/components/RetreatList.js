import React from 'react';
import { observer } from 'mobx-react';
import RetreatItem from '../components/RetreatItem';
import retreatStore from '../store/RetreateStore';
const RetreatList = observer(() => {
  return (
    <div className="retreat-list">
      {retreatStore.filteredRetreats.map(retreat => (
        <RetreatItem key={retreat.id} retreat={retreat} />
      ))}
    </div>
  );
});

export default RetreatList;
