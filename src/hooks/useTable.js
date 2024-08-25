// hooks/useTable.js

const accessRowsForColumn = (column) => {
    const rows = getRows(); // Ensure getRows() returns an array
    if (rows) {
        rows.forEach(row => {
            // Process rows
        });
    } else {
        console.error('Rows is undefined');
    }
};

const useTable = ({ data }) => {
    const rows = data || [];

    const memoizedValue = useMemo(() => {
        return computeValue(rows);
    }, [rows]);

    return {
        rows: memoizedValue,
       
    };
};

export default useTable;
