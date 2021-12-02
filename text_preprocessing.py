import nltk
from nltk.corpus import stopwords
from textblob import Word
nltk.download('stopwords')
stop = stopwords.words('english')

def text_cleaning(text):
  text=text.apply(lambda x: " ".join(x.lower() for x in x.split()))
  text = text.str.replace('[^\w\s]','')
  text = text.apply(lambda x: " ".join(x for x in x.split() if x not in stop))
  text =text.apply(lambda x: " ".join([Word(word).lemmatize() for word in x.split()]))
  text= text.apply(word_tokenize) 
return text
  
