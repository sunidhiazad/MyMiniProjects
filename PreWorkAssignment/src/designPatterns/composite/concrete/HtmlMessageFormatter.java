package designPatterns.composite.concrete;

import designPatterns.composite.interfaces.MessageFormatter;

public class HtmlMessageFormatter implements MessageFormatter {

	@Override
	public String format(String message) {
		return "<strong>" + message + "</strong>";
	}

}
