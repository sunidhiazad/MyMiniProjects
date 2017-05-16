package designPatterns.strategy.concrete;

import designPatterns.strategy.interfaces.Strategy;

public class OperationDivision implements Strategy {

	@Override
	public int doOperation(int num1, int num2) {
		if (num2 == 0)
			throw new ArithmeticException("Divide by zero is not allowed.");
		return num1 / num2;
	}

}
