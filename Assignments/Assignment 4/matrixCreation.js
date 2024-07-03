class Matrix{

     constructor(rows, columns){
        this.iNo_OfRows = rows;
        this.iNo_OfColumns = columns;
        this.matrix = Array.from({ length: rows }, () => Array(columns).fill(0));
    }
 
    // Method to set the matrix elements
    setMatrix(matrixData) {
        if (matrixData.length !== this.rows || matrixData[0].length !== this.columns) {
            throw new Error('Matrix dimensions do not match');
        }
        this.matrix = matrixData;
    }
 
    // Method to display the matrix
    displayMatrix() {
        console.log('Matrix:');
        for (let i = 0; i < this.rows; i++) {
            console.log(this.matrix[i].join(' '));
        }
    }
 
    // Method to add two matrices
    addMatrix(otherMatrix) {
        if (this.rows !== otherMatrix.rows || this.columns !== otherMatrix.columns) {
            throw new Error('Matrices dimensions do not match for addition');
        }
 
        let result = new Matrix(this.rows, this.columns);
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.columns; j++) {
                result.matrix[i][j] = this.matrix[i][j] + otherMatrix.matrix[i][j];
            }
        }
        return result;
    }
 
    // Method to subtract two matrices
    subMatrix(otherMatrix) {
        if (this.rows !== otherMatrix.rows || this.columns !== otherMatrix.columns) {
            throw new Error('Matrices dimensions do not match for subtraction');
        }
 
        let result = new Matrix(this.rows, this.columns);
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.columns; j++) {
                result.matrix[i][j] = this.matrix[i][j] - otherMatrix.matrix[i][j];
            }
        }
        return result;
    }
 
    // Method to multiply two matrices
    mulMatrix(otherMatrix) {
        if (this.columns !== otherMatrix.rows) {
            throw new Error('Matrices dimensions do not match for multiplication');
        }
 
        let result = new Matrix(this.rows, otherMatrix.columns);
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < otherMatrix.columns; j++) {
                for (let k = 0; k < this.columns; k++) {
                    result.matrix[i][j] += this.matrix[i][k] * otherMatrix.matrix[k][j];
                }
            }
        }
        return result;
    }
}
 
// Example usage
const matrix1 = new Matrix(2, 2);
const matrix2 = new Matrix(2, 2);
 
// Set matrix data
matrix1.setMatrix([
    [1, 2],
    [3, 4]
]);
 
matrix2.setMatrix([
    [5, 6],
    [7, 8]
]);