package designPatterns.strategy.concrete;

import designPatterns.strategy.interfaces.Strategy;

public class OperationSubtraction implements Strategy {

	@Override
	public int doOperation(int num1, int num2) {
		return num1 - num2;
	}

}
