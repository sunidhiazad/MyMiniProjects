package designPatterns.composite.concrete;

import designPatterns.composite.interfaces.MessageFormatter;

public class ConsoleMessageFormatter implements MessageFormatter {

	@Override
	public String format(String message) {
		return message + ".";
	}

}
