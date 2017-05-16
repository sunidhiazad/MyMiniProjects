package designPatterns.strategy.behavior;

import designPatterns.strategy.concrete.OperationAddition;
import designPatterns.strategy.concrete.OperationDivision;
import designPatterns.strategy.concrete.OperationMultiplication;
import designPatterns.strategy.concrete.OperationSubtraction;
import designPatterns.strategy.context.Context;

public class StrategyPatternDemo {
	public static void main(String[] args) {
		Context context = new Context(new OperationAddition());
		System.out.println("10 + 5 = " + context.executeStrategy(10, 5));

		context = new Context(new OperationSubtraction());
		System.out.println("10 - 5 = " + context.executeStrategy(10, 5));

		context = new Context(new OperationMultiplication());
		System.out.println("10 * 5 = " + context.executeStrategy(10, 5));

		context = new Context(new OperationDivision());
		System.out.println("10 / 5 = " + context.executeStrategy(10, 5));
	}
}
