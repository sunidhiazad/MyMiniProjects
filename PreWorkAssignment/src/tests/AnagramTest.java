package tests;

import static org.junit.Assert.assertTrue;

import org.junit.Test;

import strings.Anagram;

public class AnagramTest {

	@Test
	public void isAnagram1Test() {
		assertTrue("madam and adamm are anagrams", Anagram.isAnagram1("madam", "adamm"));
	}

	@Test
	public void isAnagram2Test() {
		assertTrue("madam and adamm are anagrams", Anagram.isAnagram2("madam", "adamm"));
	}

	@Test
	public void isAnagram3Test() {
		assertTrue("madam and adamm are anagrams", Anagram.isAnagram3("madam", "adamm"));
	}

}
