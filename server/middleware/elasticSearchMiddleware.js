const { Client } = require('@elastic/elasticsearch');
const client = new Client({ node: 'http://localhost:9200' });

async function elasticIndex(ctx, next) {
  client.index({
    index: 'learning_path21',
    type: 'learning',
    id: 'learningpath',
    body: ctx.request.body

  }, (err, result) => {
    if (err) {
      console.log(err);

    }
    console.log(result);
    console.log('troubles in my life');
  });
  await next();
}

module.exports = elasticIndex;
