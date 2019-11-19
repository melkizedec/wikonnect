const { Client } = require('@elastic/elasticsearch');
const client = new Client({ node: 'http://localhost:9200' });

async function elasticIndex(ctx, next) {
  client.index({
    index: ctx.request.body.id,
    type: 'learning',
    // id: ctx.request.body.id,
    body: ctx.request.body

  }, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
    }
  });
  await next();
}


async function elasticSearch(ctx, next) {
  client.search({
    index: ctx.request.body.id,
  }, (err, result) => {
    if (err) {
      console.log(err);
    }
    else {
      ctx.body = result.body.hits;

    }
    return ctx;
  });
  await next();
}

module.exports = {
  elasticIndex,
  elasticSearch
};
