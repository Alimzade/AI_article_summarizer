import React from 'react'
import { useState, useEffect } from 'react'
import { copy, linkIcon, loader, tick } from '../assets'
import { useLazyGetSummaryQuery } from '../services/article'

const Demo = () => {

  const [article, setArticle] = useState({
    url: '',
    length: 3,
    lang: 'en',
    summary: '',
  });
  const [allArticles, setAllArticles] = useState([]);
  const [copied, setCopied] = useState("");

  const [getSummary, {error, isFetching}] = useLazyGetSummaryQuery();

  useEffect(() => {
    const articlesFromLocalStorage = JSON.parse(localStorage.getItem('articles'))

    if(articlesFromLocalStorage){
      setAllArticles(articlesFromLocalStorage)
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const { data } = await getSummary({ articleUrl: article.url, plength: article.length, plang: article.lang});

    if(data?.summary) {
      const newArticle = { ...article, summary: data.summary };
      const updatedAllArticles = [newArticle, ...allArticles];
      
      setArticle(newArticle);
      setAllArticles(updatedAllArticles);

      console.log(newArticle);
      localStorage.setItem('articles', JSON.stringify(updatedAllArticles));
    }
  }

  const handleCopy = (copyUrl) => {
    setCopied(copyUrl);
    navigator.clipboard.writeText(copyUrl);
    setTimeout(()=> setCopied(false), 3000);
  }

  return (
    <section className='mt-16 w-full max-w-xl'>
      <div className='flex flex-col w-full gap-2'>
        {/* Search */}
        <form
          className='relative flex justify-center items-center'
          onSubmit={handleSubmit}
        >
          <img src={linkIcon} alt='link_icon' className='absolute left-0 my-2 ml-3 w-5' />
  
          <input
            type="url"
            placeholder='Enter a URL'
            value={article.url}
            onChange={(e) => setArticle({ ...article, url: e.target.value })}
            required
            className='url_input peer'
          />
  
          {/* Length Input (Hidden) */}
          <input
            type="hidden"
            name="length"
            value={article.length}
          />
  
          {/* Lang Input (Hidden) */}
          <input
            type="hidden"
            name="lang"
            value={article.lang}
          />
  
          <button type='submit' className='submit_btn absolute'>
            ↵
          </button>
  
        </form>
  
        {/* Length and Lang Inputs Wrapper */}
        <div className='relative flex flex-auto items-center justify-center flex-col sm:flex-row '>
          {/* Length Input */}
          <div className='flex items-center'>
            <label className='mr-2 text-gray-600' title='Length in paragraphs. Might be ignored for a very long articles.'>Paragraphs</label>
            <input
              type="number"
              placeholder='Paragraphs'
              value={article.length}
              title='Length in paragraphs. Might be ignored for a very long articles.'
              onChange={(e) => setArticle({ ...article, length: e.target.value })}
              className='length_input'
            />
          </div>
  
          <span>&nbsp;&nbsp;&nbsp;</span>
          
          {/* Lang Input */}
          <div className='relative flex items-center mt-[-20px] sm:mt-[0px]'>
            <label className='mr-2 text-gray-600' title='Language to translate summary into'>Language</label>
            <select
              value={article.lang}
              title='Language to translate summary into'
              onChange={(e) => setArticle({ ...article, lang: e.target.value })}
              className='lang_input'
            >
              <option value="en">English (en)</option>
              <option value="de">Deutsch (de)</option>
              <option value="tr">Turkish (tr)</option>
              <option value="ru">Russian (ru)</option>
              <option value="ar">Arabic  (ar)</option>
              <option value="es">Spanish (es)</option>
              <option value="fr">French  (fr)</option>
              <option value="it">Italian (it)</option>
              <option value="zh">Chinese (zh)</option>
            </select>
          </div>
        </div>
  
        {/* Browse URL History */}
        <div className='flex flex-col gap-1 max-h-60 overflow-y-auto'>
          {allArticles.map((item, index) => (
            <div 
              key={`link-${index}`}
              onClick={() => setArticle(item)}
              className='link_card'
            >
              <div className='copy_btn' onClick={() => handleCopy(item.url)}>
                <img 
                  src={copied === item.url ? tick : copy}
                  alt='copy_icon'
                  className='w-[40%] h-[40%] object-contain'
                />
              </div>

              <p className='flex-1 font-satoshi text-[#0a5cc7] font-medium text-sm truncate'>
                {item.url}
              </p>
              <p className='flex-2 font-satoshi text-[#0a5cc7] font-medium text-sm'>
                {item.lang} 
              </p>
            </div>
          ))}
        </div>
      </div>
  
      {/* Display Results */}
      <div className='my-10 max-2-full flex justify-center items-center'>
        {isFetching ? (
          <img src={loader} alt="loader" className='w-20 h-20 object-contain' />
        ) : error ? (
          <p className='font-inter font-bold text-black text-center'>
            Well, that wasn't supposed to happen... 
            <br />
            <span className='font-satoshi font-normal text-gray-700'>
              {error?.data?.error}
            </span>
          </p>
        ) : (
          article.summary && (
            <div className='flex flex-col gap-3'>
              <h2 className='font-satoshi font-bold text-gray-600 text-xl '>Article <span className='blue_gradient'>Summary</span></h2>
              
              <div className='summary_box'>
                <p className='font-serif font-medium text-sm text-gray-700'>{article.summary}</p>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
  
}

export default Demo